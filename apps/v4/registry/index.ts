import type { Registry } from "hui-vue/schema"
import { registryItemSchema } from "hui-vue/schema"
import { z } from "zod"

import { themes } from "~/registry/_legacy-themes"
import { blocks } from "~/registry/hui/blocks/_registry"
import { charts } from "~/registry/hui/charts/_registry"
import { examples } from "~/registry/hui/examples/_registry"
import { lib } from "~/registry/hui/lib/_registry"
import { ui } from "~/registry/hui/ui/_registry"

const DEPRECATED_ITEMS = [
  "toast",
  "toast-demo",
  "toast-destructive",
  "toast-simple",
  "toast-with-action",
  "toast-with-title",
]

// Shared between index and style for backward compatibility.
const NEW_YORK_V4_STYLE = {
  type: "registry:style",
  dependencies: ["class-variance-authority", "@lucide/vue"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
}

export const registry = {
  name: "hui-vue",
  homepage: "http://localhost:3000",
  items: z.array(registryItemSchema).parse(
    [
      {
        name: "index",
        ...NEW_YORK_V4_STYLE,
      },
      {
        name: "style",
        ...NEW_YORK_V4_STYLE,
      },
      ...ui,
      ...blocks,
      ...charts,
      ...lib,
      // ...composables,
      ...themes,
      ...examples,
      // ...internal,
    ]
      .filter((item) => {
        return !DEPRECATED_ITEMS.includes(item.name)
      })
      .map((item) => {
        // Temporary fix for dashboard-01.
        if (item.name === "dashboard-01") {
          ;(item.dependencies as string[] | undefined)?.push("@tabler/icons-vue")
        }

        if (item.name === "accordion" && "tailwind" in item) {
          // we are not deleting tailwind meta
          // delete item.tailwind
        }

        return item
      }),
  ),
} satisfies Registry
