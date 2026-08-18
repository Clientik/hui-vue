import type { RegistryItem } from 'hui-kit/schema'

export interface RegistryContentType {
  /** The name of the content type (e.g., 'ui', 'blocks', 'charts') */
  name: string
  /** The subdirectory path relative to the base (e.g., 'ui', 'blocks') */
  path: string
  /** The output registry file path (e.g., 'hui/ui/_registry.ts') */
  outputFile: string
  /** The crawl function type to use */
  crawlType: 'ui' | 'block' | 'chart' | 'example' | 'composable' | 'lib'
  /** Optional: custom type for registry items */
  type?: RegistryItem['type']
}

export interface RegistryBase {
  /** The name/identifier of the base (e.g., 'hui', 'reka') */
  name: string
  /** The path relative to registry directory */
  path: string
  /** Content types to process for this base */
  contentTypes: RegistryContentType[]
  /** Whether to build the main registry JSON and public files */
  buildMainRegistry?: boolean
  /** Custom output directory for public registry files */
  publicOutputDir?: string
}

export const registryConfig: RegistryBase[] = [
  {
    name: 'hui',
    path: 'hui',
    buildMainRegistry: true,
    publicOutputDir: 'public/r/styles/hui',
    contentTypes: [
      {
        name: 'ui',
        path: 'ui',
        outputFile: 'hui/ui/_registry.ts',
        crawlType: 'ui',
      },
      {
        name: 'blocks',
        path: 'blocks',
        outputFile: 'hui/blocks/_registry.ts',
        crawlType: 'block',
      },
      {
        name: 'charts',
        path: 'charts',
        outputFile: 'hui/charts/_registry.ts',
        crawlType: 'chart',
      },
    ],
  },
  {
    name: 'reka',
    path: 'bases/reka',
    buildMainRegistry: false,
    publicOutputDir: 'public/r/styles/reka',
    contentTypes: [
      {
        name: 'ui',
        path: 'ui',
        outputFile: 'bases/reka/ui/_registry.ts',
        crawlType: 'ui',
      },
      {
        name: 'blocks',
        path: 'blocks',
        outputFile: 'bases/reka/blocks/_registry.ts',
        crawlType: 'block',
      },
      {
        name: 'examples',
        path: 'examples',
        outputFile: 'bases/reka/examples/_registry.ts',
        crawlType: 'example',
      },
      {
        name: 'lib',
        path: 'lib',
        outputFile: 'bases/reka/lib/_registry.ts',
        crawlType: 'lib',
      },
    ],
  },
]
