import nodePath from 'node:path'
import { getTsconfig } from 'get-tsconfig'
import path from 'pathe'
import { expect, it } from 'vitest'
import { resolveImport } from '../../src/utils/resolve-import'

/*
 * The base is resolved, not written out.
 *
 * A POSIX absolute path is not absolute on Windows: resolving
 * `/Users/hui/Projects/foobar` there yields `D:/Users/...`, because the
 * drive comes from the current working directory — which is also what a
 * tsconfig on that machine would contain. Hardcoding the expected string
 * made the test assert the platform instead of the alias mapping, which is
 * what it is actually about.
 *
 * node:path resolves (it knows about drives), pathe normalises the
 * separators — the same pair the resolver itself works with.
 */
const BASE = path.normalize(nodePath.resolve('/Users/hui/Projects/foobar'))

it('resolve import', async () => {
  expect(
    resolveImport('@/foo/bar', {
      config: {
        compilerOptions: {
          baseUrl: BASE,
          paths: {
            '@/*': ['./src/*'],
            '~/components/*': ['./src/components/*'],
            '~/lib': ['./src/lib'],
          },
        },
      },
      path: '',
    }),
  ).toEqual(path.join(BASE, 'src/foo/bar'))

  expect(
    resolveImport('~/components/foo/bar/baz', {
      config: {
        compilerOptions: {
          baseUrl: BASE,
          paths: {
            '@/*': ['./src/*'],
            '~/components/*': ['./src/components/*'],
            '~/lib': ['./src/lib'],
          },
        },
      },
      path: '',
    }),
  ).toEqual(path.join(BASE, 'src/components/foo/bar/baz'))

  expect(
    resolveImport('components/foo/bar', {
      config: {
        compilerOptions: {
          baseUrl: BASE,
          paths: {
            'components/*': ['./src/app/components/*'],
            'ui/*': ['./src/ui/primities/*'],
            'lib': ['./lib'],
          },
        },
      },
      path: '',
    }),
  ).toEqual(path.join(BASE, 'src/app/components/foo/bar'))

  expect(
    resolveImport('lib/utils', {
      config: {
        compilerOptions: {
          baseUrl: BASE,
          paths: {
            'components/*': ['./src/app/components/*'],
            'ui/*': ['./src/ui/primities/*'],
            'lib': ['./lib'],
          },
        },
      },
      path: '',
    }),
  ).toEqual(path.join(BASE, 'lib/utils'))
})

it('resolve import with base url', async () => {
  const cwd = path.resolve(__dirname, '../fixtures/with-base-url')
  const config = getTsconfig(cwd)!

  expect(resolveImport('@/components/ui', config)).toEqual(
    path.resolve(cwd, 'components/ui'),
  )
  expect(resolveImport('@/lib/utils', config)).toEqual(
    path.resolve(cwd, 'lib/utils'),
  )
  expect(resolveImport('foo/bar', config)).toEqual(
    path.resolve(cwd, 'foo/bar'),
  )
})

it('resolve import without base url', async () => {
  const cwd = path.resolve(__dirname, '../fixtures/without-base-url')
  const config = getTsconfig(cwd)!

  expect(resolveImport('~/components/ui', config)).toEqual(
    path.resolve(cwd, 'components/ui'),
  )
  expect(resolveImport('~/lib/utils', config)).toEqual(
    path.resolve(cwd, 'lib/utils'),
  )
  // `createPathsMatcher` can't seems to resolve non alias path without baseUrl
  // expect(resolveImport('foo/bar', config)).toEqual(
  //   path.resolve(cwd, 'foo/bar'),
  // )
})
