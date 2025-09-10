import { cn } from "@/lib/utils";
import * as React from "react";

export const CardFooter = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={cn(
        "text-sm text-primary tracking-tight group-hover:underline underline-offset-4 font-semibold max-w-3/4 truncate",
        className
      )}
    />
  );
});

CardFooter.displayName = "CardFooter";

export default CardFooter;