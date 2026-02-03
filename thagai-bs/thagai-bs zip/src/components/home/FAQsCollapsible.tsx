import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const FAQsCollapsible = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-6 mb-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-base font-medium text-primary">{question}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronDown
              className={cn(
                "h-4 w-4 text-primary transition-transform duration-300",
                isOpen ? "rotate-180" : "rotate-0",
              )}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "100px" : "0px" }}
      >
        <CollapsibleContent
          className={cn(
            "mb-4 duration-300 transition-opacity ease-in-out",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          forceMount
        >
          <p className="text-primary text-base px-4 text-justify">{answer}</p>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default FAQsCollapsible;
