import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface GradientCardProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  hoverScale?: boolean;
  gradientIntensity?: "light" | "medium" | "strong";
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, children, hoverScale = true, gradientIntensity = "medium", ...props }, ref) => {
    const intensityMap = {
      light: "from-secondary/0 via-secondary/5 to-secondary/0",
      medium: "from-secondary/0 via-secondary/10 to-secondary/0",
      strong: "from-secondary/0 via-secondary/15 to-secondary/0",
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "border-2 border-secondary/20 hover:border-secondary",
          "hover:shadow-2xl hover:shadow-secondary/30",
          hoverScale && "hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-100 transition-opacity duration-300",
            intensityMap[gradientIntensity]
          )}
        />
        <div className="relative z-10">{children}</div>
      </Card>
    );
  }
);

GradientCard.displayName = "GradientCard";

export { GradientCard };
