import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Tree } from "./Tree.vue"
export { default as TreeGroup } from "./TreeGroup.vue"
export { default as TreeItem } from "./TreeItem.vue"

export const treeVariants = cva(
  "bg-sidebar border-sidebar-border flex w-full flex-col overflow-hidden rounded-md border p-2",
)
export type TreeVariants = VariantProps<typeof treeVariants>

export const treeItemVariants = cva(
  "group/tree-item flex h-9 w-full items-center gap-2 rounded-sm border border-transparent px-2 text-left text-lg outline-none transition-colors select-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring",
  {
    variants: {
      selected: {
        true: "bg-sidebar-accent border-sidebar-border",
        false: "hover:bg-sidebar-accent",
      },
      // Objects switched off in the scene stay in the tree but read as
      // secondary, so the eye toggle is the only thing that stands out.
      muted: {
        true: "text-foreground-tertiary",
        false: "text-sidebar-foreground",
      },
    },
    defaultVariants: {
      selected: false,
      muted: false,
    },
  },
)
export type TreeItemVariants = VariantProps<typeof treeItemVariants>
