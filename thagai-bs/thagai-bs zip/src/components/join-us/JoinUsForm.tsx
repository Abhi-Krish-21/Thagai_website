import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowDownRight, LoaderCircle } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    .max(12, {
      message: "Phone Number must be at maximum 12 characters.",
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResponseText("");

    const { name, email, phoneNumber } = values;

    const data = {
      name,
      email,
      phoneNumber,
    };

    fetch("/api/career-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseText(data.message);
        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseText("An error occurred. Please try again later.");
        setLoading(false);
      });
  }

  // Removed interested role selection field per request.

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between gap-[2.5rem]"
      >
        <div className="w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
          <FormControl>
            <Input
              className="w-full h-[3rem] tablet:h-[4.625rem] text-[1.25rem] border-[1px] border-[#CBCBCB] shadow-none outline-none focus-visible:ring-0 text-[#9675A9] px-8 rounded-[1.25rem] placeholder:text-[#9675A9]"
              placeholder="Full Name*"
              {...field}
            />
          </FormControl>
          <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex flex-col laptop:flex-row justify-between gap-[2.5rem]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    className="laptop:w-[17.3125rem] h-[3rem] tablet:h-[4.625rem] text-[1.25rem] border-[1px] border-[#CBCBCB] shadow-none outline-none focus-visible:ring-0 text-[#9675A9] px-8 rounded-[1.25rem] placeholder:text-[#9675A9]"
                    placeholder="Email*"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    className="laptop:w-[17.3125rem] h-[3rem] tablet:h-[4.625rem] text-[1.25rem] border-[1px] border-[#CBCBCB] shadow-none outline-none focus-visible:ring-0 text-[#9675A9] px-8 rounded-[1.25rem] placeholder:text-[#9675A9]"
                    placeholder="Phone Number*"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-[3.6875rem] rounded-full text-[1.25rem] font-semibold justify-center p-8 cursor-pointer"
          style={{
            boxShadow: "4px 4px 30px #8D5FA7",
          }}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : <></>}
          Get into the crew{" "}
          <ArrowDownRight className="size-[1.5rem]" strokeWidth={2} />
        </Button>
        <div>{responseText.length > 0 ? responseText : ""}</div>
      </form>
    </Form>
  );
}
