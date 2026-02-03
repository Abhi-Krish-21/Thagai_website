import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User, Mail, Clipboard, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Enter a valid email address." }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone Number must be at least 10 characters.",
    })
    .max(10, {
      message: "Phone Number must be at maximum 10 characters.",
    }),
});

export default function HomeForm() {
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { name, email, phoneNumber } = values;
    const response = await fetch("/api/contact-form", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        service: "",
      }),
    });
    const responseJson = await response.json();
    if (response.status === 200) {
      setResponseText(
        "Thank you for your enquiry! We will get back to you soon."
      );
    } else {
      setResponseText(responseJson.message || "Something went wrong.");
    }
    setLoading(false);
    form.reset();
    setTimeout(() => {
      setResponseText("");
    }, 5000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 desktop:space-y-8">
        <div className="flex flex-col laptop:flex-row justify-between gap-[1rem] laptop:gap-[0rem]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-primary text-[1.125rem] font-medium">
                  Name
                </FormLabel>
                <FormControl>
                  <div className="w-full laptop:w-[17.75rem] h-12 flex justify-center items-center rounded-full border-none ring-3 ring-[#EFF0F6] bg-white">
                    <Input
                      className="w-[calc(100%-3rem)] border-none shadow-none outline-none focus-visible:ring-0 text-[#9675A9] placeholder:text-[#9675A9]"
                      placeholder="Your Name"
                      {...field}
                    />
                    <User className="w-[1.5rem] text-[#9675A9]" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-primary text-lg font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <div className="w-full laptop:w-[17.75rem] h-12 flex justify-center items-center rounded-full border-none ring-3 ring-[#EFF0F6] px-1 bg-white">
                    <Input
                      className="w-[calc(100%-3rem)] border-none shadow-none outline-none focus-visible:ring-0 text-[#9675A9] placeholder:text-[#9675A9]"
                      placeholder="Your Email"
                      {...field}
                    />
                    <Mail className="w-[1.5rem] text-[#9675A9]" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col laptop:flex-row justify-between gap-[1rem] laptop:gap-[0rem]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-primary text-[1.125rem] font-medium">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <div className="w-full laptop:w-[17.75rem] h-12 flex justify-center items-center rounded-full border-none ring-3 ring-[#EFF0F6] px-2 bg-white">
                    <Input
                      className="w-[calc(100%-3rem)] border-none shadow-none outline-none focus-visible:ring-0 text-[#9675A9] placeholder:text-[#9675A9]"
                      placeholder="Your Phone Number"
                      {...field}
                    />
                    <Clipboard className="w-6 text-[#9675A9]" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={loading}
          type="submit"
          className="w-[13.4375rem] h-[3.6875rem] uppercase text-[1rem] justify-start p-8 cursor-pointer"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : <></>}
          Enquire Now
        </Button>

        <div>{responseText.length > 0 ? responseText : ""}</div>
      </form>
    </Form>
  );
}
