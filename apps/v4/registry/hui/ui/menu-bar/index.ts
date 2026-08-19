import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as MenuBar } from "./MenuBar.vue"
export { default as MenuBarButton } from "./MenuBarButton.vue"

export const menuBarVariants = cva(
  "bg-sidebar border-sidebar-border flex w-13 shrink-0 flex-col overflow-hidden rounded-md border",
  {
    variants: {
      orientation: {
        vertical: "flex-col",
        horizontal: "h-13 w-auto flex-row",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
)
export type MenuBarVariants = VariantProps<typeof menuBarVariants>

export const menuBarButtonVariants = cva(
  "group/menu-bar-button relative inline-flex size-13 shrink-0 items-center justify-center outline-none transition-colors select-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring border border-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*=size-])]:size-8",
  {
    variants: {
      // Rounding follows the button's place in the rail so the ends stay soft
      // and the seams stay square.
      position: {
        default: "rounded-md",
        top: "rounded-t-md",
        middle: "rounded-none",
        bottom: "rounded-b-md",
      },
      active: {
        true: "bg-sidebar-accent text-sidebar-accent-foreground",
        false: "bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent",
      },
    },
    defaultVariants: {
      position: "default",
      active: false,
    },
  },
)
export type MenuBarButtonVariants = VariantProps<typeof menuBarButtonVariants>
