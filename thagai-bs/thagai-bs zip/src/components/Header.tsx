import Container from "./Container";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/CustomHeaderSheet";
import HeaderMobile from "./HeaderMobile";
import { cn } from "@/lib/utils";

const ServicesSheet = ({
  logoLg,
  activePage,
}: {
  logoLg: string;
  activePage: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn(
            "flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          )}
        >
          <span
            className={cn(
              "flex items-center font-extrabold text-[1.25rem] cursor-pointer",
              activePage === "services" && "border-b-2 border-primary"
            )}
          >
            Services
          </span>{" "}
          <ChevronDown size={30} strokeWidth={1} />
        </button>
      </SheetTrigger>

      <SheetContent side="top" className="bg-transparent">
        <div className="bg-primary w-screen h-[17.25rem] text-white mt-[5.4rem]">
          <Container className="flex items-center gap-[4rem] min-[90rem]:gap-[6rem] h-full px-[3.75rem]">
            <div className="w-[29.0625rem] h-[14.625rem] flex flex-col items-start justify-between">
              <h3 className="font-extrabold text-[1.875rem]">Our Services</h3>

              <p className="font-normal text-sm text-justify">
                At Thagai, we provide a range of compassionate, person-centered
                care services to meet diverse needs. Our home healthcare ensures
                elderly individuals receive personalized support in a
                comfortable environment. Maternity care offers guidance,
                companionship, and assistance for a smooth transition into
                mothe....
              </p>

              <a
                href="/services"
                className="w-[13.4375rem] h-[3.6875rem] flex justify-center items-center rounded-[0.625rem] border-2 border-white uppercase"
              >
                Know More
              </a>
            </div>

            <div className="h-[13.625rem] w-1 bg-white" />

            <div className="w-[8.125rem] h-[7.5625rem] flex flex-col justify-between items-start">
              <a
                href="/services/home-healthcare"
                className={cn(
                  activePage === "services/home-healthcare" &&
                    "border-b-[1px] border-white"
                )}
              >
                Home Healthcare
              </a>
              <a
                href="/services/maternity-care"
                className={cn(
                  activePage === "services/maternity-care" &&
                    "border-b-[1px] border-white"
                )}
              >
                Maternity Care
              </a>
              <a
                href="/services/palliative-care"
                className={cn(
                  activePage === "services/palliative-care" &&
                    "border-b-[1px] border-white"
                )}
              >
                Palliative Care
              </a>
            </div>

            <div className="w-[9rem] h-[7.5625rem] flex flex-col justify-between items-start">
              <a
                href="/services/hire-a-nanny"
                className={cn(
                  activePage === "services/hire-a-nanny" &&
                    "border-b-[1px] border-white"
                )}
              >
                Hire A Nanny!
              </a>
              <a
                href="/services/child-care"
                className={cn(
                  activePage === "services/child-care" &&
                    "border-b-[1px] border-white"
                )}
              >
                Child Care
              </a>
              <a
                href="/services/post-surgical-care"
                className={cn(
                  activePage === "services/post-surgical-care" &&
                    "border-b-[1px] border-white"
                )}
              >
                Post Surgical Care
              </a>
            </div>

            <img
              src={logoLg}
              alt="Thagai Healthcare Services Full Logo"
              className="w-[11.8125rem] h-[4rem]"
            />
          </Container>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const AboutUsSheet = ({
  logoLg,
  activePage,
}: {
  logoLg: string;
  activePage: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn(
            "flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          )}
        >
          <span
            className={cn(
              "flex items-center font-extrabold text-[1.25rem] cursor-pointer",
              activePage === "about-us" && "border-b-2 border-primary"
            )}
          >
            About Us
          </span>{" "}
          <ChevronDown size={30} strokeWidth={1} />
        </button>
      </SheetTrigger>

      <SheetContent side="top" className="bg-transparent">
        <div className="bg-primary w-screen h-[17.25rem] text-white mt-[5.4rem]">
          <Container className="flex items-center gap-[5.9375rem] h-full px-[3.125rem]">
            <div className="w-[29.0625rem] h-[14.625rem] flex flex-col items-start justify-between">
              <h3 className="font-extrabold text-[1.875rem]">About Us</h3>

              <p className="font-normal text-sm text-justify">
                Thagai is a compassionate care provider dedicated to delivering
                affordable, high-quality support tailored to individual needs.
                From home healthcare and maternity care to palliative and
                post-surgical support...
              </p>

              <a
                href="/about-us"
                className="w-[13.4375rem] h-[3.6875rem] flex justify-center items-center rounded-[0.625rem] border-2 border-white uppercase"
              >
                Know More
              </a>
            </div>

            <div className="h-[13.625rem] w-1 bg-white" />

            <div className="w-[8.125rem] h-[7.5625rem] flex flex-col justify-between items-start">
              <a href="/about-us/#why-thagai?">Why Thagai?</a>
              <a href="/about-us/#our-vision">Vision</a>
              <a href="/about-us/#our-mission">Mission</a>
            </div>

            <img
              src={logoLg}
              alt="Thagai Healthcare Services Full Logo"
              className="w-[23.8125rem] h-[8.0625rem]"
            />
          </Container>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = ({
  activePage,
  logo,
  logoLg,
  whatsappLogo,
}: {
  activePage: string;
  logo: string;
  logoLg: string;
  whatsappLogo: string;
}) => {
  return (
    <header className="z-20 w-full h-[5.375rem] bg-transparent shadow-none">
      <Container className="h-full flex items-center justify-between">
        <a href="/" className="hidden desktop:block translate-y-1">
          <img
            src={logo}
            alt="Thagai Healthcare Services Logo"
            className="w-32"
          />
        </a>

        <nav className="hidden desktop:flex items-center text-primary gap-[3.125rem]">
          <a
            href="/"
            className="flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          >
            Home
          </a>

          {/* <AboutUsSheet activePage={activePage} logoLg={logoLg} /> */}
          {/* <ServicesSheet activePage={activePage} logoLg={logoLg} /> */}
          <a
            href="#our-services"
            className="flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          >
            Our Services
          </a>

          <a
            href="/join-us"
            className="flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          >
            Join Us
          </a>

          <a
            href="/contact-us"
            className="flex items-center font-extrabold text-[1.25rem] cursor-pointer"
          >
            Contact Us
          </a>
          <a href="https://wa.me/message/5BQHK3KZ2SV2C1" target="_blank" rel="noopener noreferrer">
            <Button className="hidden desktop:flex width-[6.75rem] h-[2.8125rem] text-primary text-[1.25rem] font-extrabold rounded-[1.25rem] border-1 border-primary hover:bg-white cursor-pointer bg-transparent">
              <img
                src={whatsappLogo}
                alt="WhatsApp Contact Button"
                className="size-[1.125rem]"
              />
              Chat
            </Button>
          </a>
        </nav>

        <HeaderMobile
          activePage={activePage}
          whatsappLogo={whatsappLogo}
          logo={logo}
        />
      </Container>
    </header>
  );
};

export default Header;
