import { cn } from "@/lib/utils";
import * as React from "react";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn("text-sm text-muted-foreground leading-4 line-clamp-5", className)}
    />
  );
});

CardDescription.displayName = "CardDescription";

export default CardDescription;