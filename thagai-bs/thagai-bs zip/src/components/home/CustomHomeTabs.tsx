import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PHONE_NUMBER } from "@/lib/data";

const LongRightArrow = () => (
  <svg
    width="39"
    height="16"
    viewBox="0 0 39 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 8H37.5M37.5 8L30.75 1M37.5 8L30.75 15"
      stroke="#792BA5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Card1 = () => (
  <Card className="max-w-[26.25rem] rounded-[1.5625rem] laptop:ml-[4.875rem] p-[2.375rem] bg-white">
    <CardContent className="space-y-2 p-0">
      <p className="text-primary text-[1.125rem] text-justify">
        A Home Care Package is a personalized, flexible support plan designed to
        help seniors live safely and comfortably at home. It includes a range of
        services and essential care products tailored to individual needs. With
        Thagai, aging at home becomes easier, ensuring dignity, independence,
        and peace of mind.
      </p>
    </CardContent>
    <CardFooter className="border-t-[1px] border-primary px-0 pb-0 pt-[1.75rem]">
      <a
        href="/about-us"
        className="text-[1.125rem] font-bold text-primary flex items-center gap-[1.5rem]"
      >
        Learn More <LongRightArrow />
      </a>
    </CardFooter>
  </Card>
);

const Card2 = () => (
  <Card className="max-w-[26.25rem] rounded-[1.5625rem] laptop:ml-[4.875rem] p-[2.375rem] bg-white">
    <CardContent className="space-y-2 p-0">
      <p className="text-primary text-[1.125rem] text-justify">
        At Thagai, getting the right care is quick and hassle-free. Just tell us
        what you need, and we’ll connect you with trusted professionals who fit
        your requirements. From personalized care plans to ongoing support, we
        make sure you or your loved ones receive quality assistance—effortlessly
        and affordably.
      </p>
    </CardContent>
    <CardFooter className="border-t-[1px] border-primary px-0 pb-0 pt-[1.75rem]">
      <a
        href="/about-us"
        className="text-[1.125rem] font-bold text-primary flex items-center gap-[1.5rem]"
      >
        Learn More <LongRightArrow />
      </a>
    </CardFooter>
  </Card>
);

const Card3 = () => (
  <Card className="h-full laptop:max-h-[29.75rem] max-w-[51.75rem] rounded-[1.5625rem] laptop:ml-[4.875rem] p-[2.375rem] bg-white">
    <CardContent className="h-full space-y-2 p-0 flex flex-col gap-4 tablet:gap-0 laptop:flex-row items-center">
      <div className="laptop:w-1/2 flex flex-col gap-4 laptop:pr-4">
        <p className="font-bold text-primary text-[1.125rem] text-justify">
          Thagai is here to support you every step of the way, making it easier
          to navigate the care system.
        </p>
        <p className="text-primary text-[1.125rem] text-justify">
          We understand that finding the right care can feel overwhelming, and
          we’re committed to simplifying the process for you. Our friendly team
          will guide you through every step, helping you choose the best care
          options tailored to your needs, so you can focus on living comfortably
          and independently.
        </p>
        <CardFooter className="border-t-[1px] border-primary px-0 pb-0 pt-[1.75rem]">
          <a
            href="/contact-us#get-a-call-back"
            className="text-[1.125rem] font-bold text-primary flex items-center gap-[1.5rem]"
          >
            <Button
              variant="outline"
              className="uppercase text-primary text-[1rem] w-[13.4375rem] h-[3.6875rem] shadow-none border-[1px] border-primary bg-transparent cursor-pointer hover:text-primary"
            >
              Enquire Now
            </Button>
          </a>
        </CardFooter>
      </div>
      <div className="laptop:min-h-[25rem] mt-4 laptop:mt-0 laptop:w-1/2 flex flex-col gap-4 pt-4 laptop:pt-0 laptop:pl-4 border-t-[1px] laptop:border-l-[1px] laptop:border-t-0 border-primary">
        <p className="font-bold text-primary text-[1.125rem] text-justify uppercase">
          No matter where you or your loved one is on their care journey, Thagai
          is here to make life easier.
        </p>
        <p className="text-primary text-[1.125rem] text-justify font-normal">
          Our team offers free, friendly guidance to help you find the right
          care solutions—whether you're a Thagai client or just exploring
          options. We’re here to ensure comfort, independence, and peace of mind
          every step of the way.
        </p>
        <Button
          className="rounded-md h-[1.8125rem] font-bold text-base"
          asChild
        >
          <a href={`tel:${PHONE_NUMBER}`}> CALL US {PHONE_NUMBER}</a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export const tabsContent = [
  {
    title: "What is a Home Care Package?",
    Card: Card1,
  },
  {
    title: "How Does it work?",
    Card: Card2,
  },
  {
    title: "How do I get started?",
    Card: Card3,
  },
];

export default function CustomHomeTabs() {
  return (
    <Tabs
      defaultValue="0"
      className="w-full max-w-[90rem] flex flex-col items-center z-10 gap-0"
    >
      <TabsList className="relative grid w-full max-w-[40rem] laptop:max-w-[56.25rem] h-[10rem] tablet:h-[8rem] laptop:h-[5.5625rem] grid-cols-3 p-0 bg-transparent">
        <div className="absolute bottom-0 w-full h-[1.625rem] bg-primary rounded-b-[0.625rem] z-0" />
        {tabsContent.map(({ title }, index) => (
          <TabsTrigger
            key={index}
            value={`${index}`}
            className="text-[1.1875rem] text-primary font-bold z-10 data-[state=active]:bg-[#c3b9b7] data-[state=active]:text-primary whitespace-normal break-words laptop:whitespace-nowrap cursor-pointer"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative w-full justify-center items-center pt-12">
        {tabsContent.map(({ Card }, index) => (
          <TabsContent
            key={index}
            value={`${index}`}
            className="absolute w-full min-h-[42.0625rem] flex items-center justify-center laptop:justify-start data-[state=active]:opacity-100 data-[state=inactive]:opacity-0 duration-300 transition-opacity"
            style={{ zIndex: index }}
            forceMount
          >
            <Card />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
