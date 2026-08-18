import type { Registry } from "hui-kit/schema"
import { registryItemSchema } from "hui-kit/schema"
import { z } from "zod"
import { fonts } from "@/registry/fonts"

import { blocks } from "@/registry/hui/blocks/_registry"
import { charts } from "@/registry/hui/charts/_registry"
import { ui } from "@/registry/hui/ui/_registry"

export const registry = {
  name: "hui",
  homepage: "http://localhost:3000",
  items: z
    .array(registryItemSchema)
    .parse([
      ...ui,
      ...blocks,
      ...charts,
      ...fonts,
    ]),
} satisfies Registry
