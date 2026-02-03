import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu, XIcon } from "lucide-react";
import SideBarContent from "./sidebar-content";
import { PHONE_NUMBER } from "@/lib/data";

const HeaderMobile = ({
  activePage,
  logo,
  whatsappLogo,
}: {
  activePage: string;
  logo: string;
  whatsappLogo: string;
}) => {
  return (
    <nav className="flex justify-between gap-[1rem] desktop:hidden w-full">
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-primary" size={30} />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="desktop:hidden max-w-[18.75rem] border-none"
            defaultCloseButton={false}
          >
            <SheetHeader className="h-[6rem] flex flex-row items-center justify-between bg-white/80">
              <a
                href="/"
                className="flex justify-center items-center translate-y-1"
              >
                <img
                  src={logo}
                  alt="Thagai Healthcare Services Mobile Logo"
                  className="w-32 rounded-[0.8rem]"
                />
              </a>

              <SheetClose>
                <XIcon className="size-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>

            <SideBarContent activePage={activePage} />

            <SheetFooter className="h-[7rem] ">
              <div className="flex flex-col gap-2 bg-primary/10 rounded-md p-4">
                <p className="text-sm">Need assistance?</p>
                <p className="text-base">Call us: {PHONE_NUMBER}</p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <a href="/" className="desktop:hidden translate-y-1">
          <img
            src={logo}
            alt="Thagai Healthcare Services Logo"
            className="w-28"
          />
        </a>
      </div>
      <a
        href="https://wa.me/message/5BQHK3KZ2SV2C1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="width-[6.75rem] h-[2.8125rem] bg-transparent text-primary text-[1.25rem] font-extrabold rounded-[1.25rem] border-1 border-primary cursor-pointer">
          <img
            src={whatsappLogo}
            alt="Whatsapp Logo"
            className="size-[1.125rem]"
          />
          Chat
        </Button>
      </a>
    </nav>
  );
};

export default HeaderMobile;
