import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
  /* Adjusted max width to 84rem to align with new 90% global scale (balance line length). */
  className={cn("w-full max-w-[84rem] mx-auto px-4 tablet:px-9", className)}
    >
      {children}
    </div>
  );
};

export default Container;
