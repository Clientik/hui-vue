import type { Registry } from "hui-vue/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
    registryDependencies: [],
    dependencies: [
      "clsx",
      "tailwind-merge",
    ],
  },
]
