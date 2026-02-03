import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import { House, Info, Activity, ChevronDown, Users, Phone } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, type ReactNode, type SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface LinkType {
  title: string;
  href: string;
  icon?: ReactNode;
  key?: string;
  sublinks?: LinkType[];
}

const links: LinkType[] = [
  {
    title: "Home",
    href: "/",
    key: "home",
    icon: <House className="size-6" />,
  },
  {
    title: "Our Services",
    // href: "/services",
    href: "#our-services",
    key: "services",
    icon: <Activity className="size-6" />,
    // sublinks: [
    //   {
    //     title: "Home Healthcare",
    //     href: "/services/home-healthcare",
    //     key: "services/home-healthcare",
    //   },
    //   {
    //     title: "Maternity Care",
    //     href: "/services/maternity-care",
    //     key: "services/maternity-care",
    //   },
    //   {
    //     title: "Palliative Care",
    //     href: "/services/palliative-care",
    //     key: "services/palliative-care",
    //   },
    //   {
    //     title: "Post Surgical Care",
    //     href: "/services/post-surgical-care",
    //     key: "services/post-surgical-care",
    //   },
    //   {
    //     title: "Child Care",
    //     href: "/services/child-care",
    //     key: "services/child-care",
    //   },
    //   {
    //     title: "Hire a Nanny!",
    //     href: "/services/hire-a-nanny",
    //     key: "services/hire-a-nanny",
    //   },
    // ],
  },
  // {
  //   title: "About Us",
  //   href: "/about-us",
  //   key: "about-us",
  //   icon: <Info className="size-6" />,
  //   sublinks: [
  //     {
  //       title: "Why Thagai?",
  //       href: "/about-us/#why-thagai?",
  //     },
  //     {
  //       title: "Vision",
  //       href: "/about-us/#our-vision",
  //     },
  //     {
  //       title: "Mission",
  //       href: "/about-us/#our-mission",
  //     },
  //   ],
  // },
  {
    title: "Join Us",
    href: "/join-us",
    key: "join-us",
    icon: <Users className="size-6" />,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    key: "contact-us",
    icon: <Phone className="size-6" />,
  },
];

const LinkComponent = ({
  activePage,
  link,
  index,
  isActive,
  setIsActive,
}: {
  activePage: string;
  link: LinkType;
  index: number;
  isActive: boolean | number;
  setIsActive: React.Dispatch<SetStateAction<boolean | number>>;
}) => {
  return (
    <Collapsible
      open={index === isActive}
      onOpenChange={() => index === isActive && setIsActive(false)}
    >
      <CollapsibleTrigger asChild>
        <div
          className={cn(
            "w-full flex justify-between px-4 rounded-md",
            !link.sublinks && "py-2",
            activePage === link.key && "bg-primary/10",
          )}
        >
          <div className="w-full flex items-center gap-2">
            {link.icon}
            <a href={link.href} className="w-full font-medium">
              {link.title}
            </a>
          </div>
          {link.sublinks && (
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsActive(index)}
            >
              <ChevronDown className="" />
              <span className="sr-only">Toggle</span>
            </Button>
          )}
        </div>
      </CollapsibleTrigger>
      {link.sublinks && (
        <CollapsibleContent className="flex flex-col px-6 py-2 data-[state=open]:bg-red">
          {link.sublinks?.map((sublink) => (
            <a
              key={sublink.title}
              href={sublink.href}
              className={cn(
                "border-l border-gray-300 pl-8 py-2 font-normal text-primary rounded-r-md",
                activePage === sublink.key && "bg-primary/10",
              )}
            >
              {sublink.title}
            </a>
          ))}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

const SideBarContent = ({ activePage }: { activePage: string }) => {
  const [isActive, setIsActive] = useState<boolean | number>(false);

  return (
    <ScrollArea
      className="w-full h-[calc(100vh-15rem)] px-4"
      data-lenis-prevent
      style={{
        msOverflowStyle: "none", // NOTE: Hide Scroll Bar in IE and Edge
        scrollbarWidth: "none", // NOTE: Hide Scroll Bar in Firefox
      }}
    >
      {links.map((link, index) => (
        <LinkComponent
          key={link.title}
          activePage={activePage}
          link={link}
          index={index}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </ScrollArea>
  );
};

export default SideBarContent;
