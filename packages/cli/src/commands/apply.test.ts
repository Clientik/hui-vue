import { describe, expect, it, vi } from 'vitest'
import { encodePreset } from '@/src/preset/preset'
import { DEFAULT_PRESETS } from '@/src/preset/presets'
import { HUI_KIT_URL } from '@/src/registry/constants'
import {
  getBase,
  getInitCommand,
  resolveApplyInitUrl,
  resolveApplyPreset,
} from './apply'

vi.mock('@/src/utils/handle-error', () => ({
  handleError: vi.fn(),
}))

vi.mock('@/src/utils/logger', () => ({
  logger: {
    error: vi.fn(),
    warn: vi.fn(),
    log: vi.fn(),
    info: vi.fn(),
    break: vi.fn(),
  },
}))

describe('resolveApplyPreset', () => {
  const baseOptions = {
    cwd: '/tmp',
    yes: false,
    silent: false,
  }

  it('returns the positional preset when only a positional is provided', () => {
    expect(
      resolveApplyPreset({ ...baseOptions, positionalPreset: 'neva' }),
    ).toBe('neva')
  })

  it('returns the flag preset when only --preset is provided', () => {
    expect(resolveApplyPreset({ ...baseOptions, preset: 'neva' })).toBe('neva')
  })

  it('returns the value when positional and flag agree', () => {
    expect(
      resolveApplyPreset({
        ...baseOptions,
        positionalPreset: 'neva',
        preset: 'neva',
      }),
    ).toBe('neva')
  })

  it('trims surrounding whitespace from preset values', () => {
    expect(
      resolveApplyPreset({ ...baseOptions, positionalPreset: '  neva  ' }),
    ).toBe('neva')
  })

  it('returns undefined when no preset is provided', () => {
    expect(resolveApplyPreset(baseOptions)).toBeUndefined()
  })

  it('exits when positional and flag presets disagree', () => {
    const exitSpy = vi
      .spyOn(process, 'exit')
      .mockImplementation(((_code?: number) => {
        throw new Error('process.exit called')
      }) as never)

    try {
      expect(() =>
        resolveApplyPreset({
          ...baseOptions,
          positionalPreset: 'neva',
          preset: 'https://example.com/init',
        }),
      ).toThrow('process.exit called')

      expect(exitSpy).toHaveBeenCalledWith(1)
    }
    finally {
      // Guard with `finally` so a failed assertion above can't leak the
      // spy into neighbouring tests. Vitest is not configured with
      // `restoreMocks: true`, so this cleanup has to be explicit.
      exitSpy.mockRestore()
    }
  })
})

describe('getBase', () => {
  it('extracts the base segment from a composed style id', () => {
    expect(getBase('reka-vega')).toBe('reka')
    expect(getBase('reka-neva')).toBe('reka')
  })

  it('falls back to the default base for unknown / empty styles', () => {
    expect(getBase(undefined)).toBe('reka')
    expect(getBase('')).toBe('reka')
    expect(getBase('mystery-style')).toBe('reka')
  })
})

describe('getInitCommand', () => {
  it('returns the bare init command when no preset is provided', () => {
    expect(getInitCommand()).toBe('hui-kit init')
  })

  it('appends a simple preset name without quoting', () => {
    expect(getInitCommand('neva')).toBe('hui-kit init --preset neva')
  })

  it('quotes preset values that contain shell-unsafe characters', () => {
    expect(
      getInitCommand('https://example.com/init?style=neva&base=reka'),
    ).toBe(
      'hui-kit init --preset "https://example.com/init?style=neva&base=reka"',
    )
  })
})

describe('resolveApplyInitUrl', () => {
  /*
   * Everything here is derived from the constants, not written out.
   *
   * The site lives on a GitHub Pages subpath, so its init URL is
   * `/hui-vue/init`, and the only shipped preset is `neva`. These tests came
   * from upstream, where the site sits at a domain root and other presets
   * exist, and their literals had quietly stopped describing this project.
   */
  const INIT_URL = `${HUI_KIT_URL}/init`
  const [PRESET_NAME] = Object.keys(DEFAULT_PRESETS)

  it('builds an init URL for a named preset and forces base + rtl', () => {
    const url = resolveApplyInitUrl(PRESET_NAME!, { base: 'reka', rtl: true })
    expect(url).not.toBeNull()

    const parsed = new URL(url!)
    expect(parsed.pathname).toBe(new URL(INIT_URL).pathname)
    expect(parsed.searchParams.get('base')).toBe('reka')
    const preset = DEFAULT_PRESETS[PRESET_NAME as keyof typeof DEFAULT_PRESETS]
    expect(parsed.searchParams.get('style')).toBe(preset.style)
    expect(parsed.searchParams.get('iconLibrary')).toBe(preset.iconLibrary)
    expect(parsed.searchParams.get('font')).toBe(preset.font)
    expect(parsed.searchParams.get('baseColor')).toBe(preset.baseColor)
    expect(parsed.searchParams.get('rtl')).toBe('true')
  })

  it('always overrides the preset base with the project current base', () => {
    // Even if a future named preset shipped with a different base, the
    // current project base must win — applying a preset never silently
    // switches the user's component library.
    const url = resolveApplyInitUrl(PRESET_NAME!, { base: 'reka', rtl: false })
    expect(url).not.toBeNull()
    const parsed = new URL(url!)
    expect(parsed.searchParams.get('base')).toBe('reka')
    expect(parsed.searchParams.get('rtl')).toBe('false')
  })

  it('builds an init URL for an encoded preset', () => {
    const code = encodePreset({
      style: 'neva',
      baseColor: 'zinc',
      theme: 'zinc',
      font: 'inter',
      iconLibrary: 'lucide',
    })
    const url = resolveApplyInitUrl(code, { base: 'reka', rtl: false })
    expect(url).not.toBeNull()

    const parsed = new URL(url!)
    expect(parsed.searchParams.get('style')).toBe('neva')
    expect(parsed.searchParams.get('baseColor')).toBe('zinc')
    expect(parsed.searchParams.get('theme')).toBe('zinc')
    expect(parsed.searchParams.get('font')).toBe('inter')
    expect(parsed.searchParams.get('iconLibrary')).toBe('lucide')
    // currentBase carried through.
    expect(parsed.searchParams.get('base')).toBe('reka')
    // Original preset code round-tripped for server-side compat fixups.
    expect(parsed.searchParams.get('preset')).toBe(code)
  })

  it('passes a remote URL through with base + rtl overrides applied', () => {
    // A first-party /init URL: tracking is added only for our own host.
    const remote = `${INIT_URL}?base=other&style=neva&font=figtree`
    const url = resolveApplyInitUrl(remote, { base: 'reka', rtl: true })
    expect(url).not.toBeNull()

    const parsed = new URL(url!)
    expect(parsed.searchParams.get('base')).toBe('reka')
    expect(parsed.searchParams.get('rtl')).toBe('true')
    // Non-overridden params come through unchanged.
    expect(parsed.searchParams.get('style')).toBe('neva')
    expect(parsed.searchParams.get('font')).toBe('figtree')
    // First-party /init URLs are tracked.
    expect(parsed.searchParams.get('track')).toBe('1')
  })

  it('always writes rtl=false on a remote URL when the project is LTR', () => {
    const remote = 'http://localhost:3000/init?base=reka&style=neva&rtl=true'
    const url = resolveApplyInitUrl(remote, { base: 'reka', rtl: false })
    const parsed = new URL(url!)
    expect(parsed.searchParams.get('rtl')).toBe('false')
  })

  it('does not add track=1 to third-party URLs', () => {
    const remote = 'https://example.com/init?style=neva'
    const url = resolveApplyInitUrl(remote, { base: 'reka', rtl: false })
    const parsed = new URL(url!)
    expect(parsed.searchParams.has('track')).toBe(false)
  })

  it('returns null for an unknown named preset', () => {
    expect(
      resolveApplyInitUrl('not-a-real-preset', { base: 'reka', rtl: false }),
    ).toBeNull()
  })
})
