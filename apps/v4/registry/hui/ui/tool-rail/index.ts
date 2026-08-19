import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as ToolRail } from "./ToolRail.vue"
export { default as ToolRailButton } from "./ToolRailButton.vue"

export const toolRailVariants = cva(
  "group/tool-rail bg-sidebar border-sidebar-border flex w-fit shrink-0 flex-col overflow-hidden rounded-md border-[1.5px]",
  {
    variants: {
      orientation: {
        vertical: "flex-col",
        horizontal: "h-fit w-fit flex-row",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
)
export type ToolRailVariants = VariantProps<typeof toolRailVariants>

export const toolRailButtonVariants = cva(
  "group/tool-rail-button relative inline-flex size-13 shrink-0 items-center justify-center outline-none transition-colors select-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring border border-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*=size-])]:size-8",
  {
    variants: {
      // Rounding follows the button's place in the rail, so only the two ends
      // of the strip stay soft and every seam in between stays square. Which
      // edges those are depends on the rail's orientation, which the button
      // reads off the rail itself rather than through a prop.
      position: {
        default: "rounded-md",
        top: "rounded-none group-data-[orientation=vertical]/tool-rail:rounded-t-md group-data-[orientation=horizontal]/tool-rail:rounded-l-md",
        middle: "rounded-none",
        bottom: "rounded-none group-data-[orientation=vertical]/tool-rail:rounded-b-md group-data-[orientation=horizontal]/tool-rail:rounded-r-md",
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
export type ToolRailButtonVariants = VariantProps<typeof toolRailButtonVariants>
