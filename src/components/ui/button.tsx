import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-otlob-ash",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-tr from-otlob-rose via-otlob-amber to-otlob-emerald text-otlob-charcoal shadow-ambient hover:brightness-105",
        secondary:
          "bg-black/5 text-otlob-charcoal hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        outline:
          "border border-black/10 bg-transparent text-otlob-charcoal hover:border-otlob-amber/80 hover:text-otlob-amber dark:border-white/15 dark:text-white",
        ghost: "bg-transparent text-otlob-charcoal hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-14 px-8 text-base",
        icon: "size-12"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref as never} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
