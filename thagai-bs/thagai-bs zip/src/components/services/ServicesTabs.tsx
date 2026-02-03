import { Card, CardContent } from "@/components/ui/card";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const ServicesTabs = ({
  tabsContent,
}: {
  tabsContent: {
    title: string;
    description: string;
    link: string;
    bgImage: string;
  }[];
}) => {
  return (
    <Card className="hidden tablet:flex relative mx-auto max-w-[64.25rem] min-h-[45.6875rem] z-0 p-0 rounded-[3.125rem] overflow-clip">
      <div className="top-0 right-0 absolute bg-primary w-[10rem] laptop:w-[19rem] h-full -z-10" />
      <CardContent className="z-10">
        <TabsPrimitive.Root
          orientation="vertical"
          defaultValue="Home Healthcare"
          className="w-full h-full flex flex-row min-h-[45.6875rem] items-center justify-center gap-4"
        >
          <TabsPrimitive.List className="w-full flex flex-col justify-center items-center h-[45rem] max-w-[30%] laptop:max-w-[calc(100%-37.625rem)] desktop:max-w-[23.3125rem] bg-transparent gap-6">
            {tabsContent.map(({ title }) => (
              <TabsPrimitive.Trigger
                key={title}
                value={title}
                className="w-[calc(100%-1rem)] laptop:w-[calc(100%-3rem)] data-[state=active]:w-full h-16 bg-none text-primary data-[state=active]:text-white border-2 border-primary rounded-full font-semibold text-[1rem] laptop:text-[1.25rem] data-[state=active]:bg-primary data-[state=active]:shadow-[4px_4px_30px_#8D5FA7] cursor-pointer"
                style={
                  {
                    // boxShadow: "4px 4px 30px #8D5FA7",
                  }
                }
              >
                {title}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>
          {tabsContent.map(({ title, description, bgImage, link }) => (
            <TabsPrimitive.Content
              key={title}
              value={title}
              className="w-full max-w-[37.25rem] h-[39.3125rem]"
            >
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
                className="flex items-end justify-center w-full h-full bg-center bg-cover bg-no-repeat p-4 rounded-r-2xl"
              >
                <div className="max-w-[35.625rem] rounded-[1.25rem] bg-custom-yellow p-8">
                  <p className="text-[1.25rem] text-primary font-normal text-justify leading-9">
                    {description}
                  </p>
                  <a
                    href={link}
                    className="underline text-[1.25rem] text-primary font-semibold leading-9"
                  >
                    More Information
                  </a>
                </div>
              </div>
            </TabsPrimitive.Content>
          ))}
        </TabsPrimitive.Root>
      </CardContent>
    </Card>
  );
};

export default ServicesTabs;
