import { cn } from "@/lib/utils";
import * as React from "react";

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "overflow-hidden border rounded-lg w-full relative flex-[0_0_50%]",
        className
      )}
    />
  );
});

CardImage.displayName = "CardImage";

export default CardImage;
