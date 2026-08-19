import path from 'pathe'
import { expect, it } from 'vitest'

/*
 * pathe, not node:path.
 *
 * The CLI normalises every path it produces to forward slashes so that a
 * config written on one platform means the same thing on another. Building
 * the expectation with node:path made this test assert backslashes on
 * Windows and pass only on POSIX — it was checking the platform, not the
 * code.
 */

import { getItemTargetPath } from '../../src/registry/api'
import { getConfig } from '../../src/utils/get-config'

it('get item target path', async () => {
  // Full config.
  let appDir = path.resolve(__dirname, '../fixtures/config-full')
  expect(
    await getItemTargetPath(await getConfig(appDir), {
      type: 'registry:ui',
    }),
  ).toEqual(path.resolve(appDir, './src/ui'))

  // Partial config.
  appDir = path.resolve(__dirname, '../fixtures/config-partial')
  expect(
    await getItemTargetPath(await getConfig(appDir), {
      type: 'registry:ui',
    }),
  ).toEqual(path.resolve(appDir, './components/ui'))

  // Custom paths.
  appDir = path.resolve(__dirname, '../fixtures/config-ui')
  expect(
    await getItemTargetPath(await getConfig(appDir), {
      type: 'registry:ui',
    }),
  ).toEqual(path.resolve(appDir, './src/ui'))
})
