import { describe, expect, it } from 'vitest'
import { composeStyleId, resolveRegistryStyle } from '../../src/registry/config'

describe('resolveRegistryStyle', () => {
  it('returns fallback style for undefined', () => {
    expect(resolveRegistryStyle(undefined)).toBe('hui')
  })

  it('passes a full style identifier through unchanged', () => {
    expect(resolveRegistryStyle('reka-luma')).toBe('reka-luma')
    expect(resolveRegistryStyle('reka-vega')).toBe('reka-vega')
    expect(resolveRegistryStyle('hui')).toBe('hui')
    expect(resolveRegistryStyle('new-york')).toBe('new-york')
    expect(resolveRegistryStyle('default')).toBe('default')
  })
})

describe('composeStyleId', () => {
  it('returns FALLBACK_STYLE when style is undefined', () => {
    expect(composeStyleId('reka', undefined)).toBe('hui')
    expect(composeStyleId(undefined, undefined)).toBe('hui')
  })

  it('composes visual style with base', () => {
    expect(composeStyleId('reka', 'luma')).toBe('reka-luma')
    expect(composeStyleId('reka', 'sera')).toBe('reka-sera')
    expect(composeStyleId('reka', 'vega')).toBe('reka-vega')
    expect(composeStyleId('reka', 'neva')).toBe('reka-neva')
    expect(composeStyleId('reka', 'maia')).toBe('reka-maia')
    expect(composeStyleId('reka', 'lyra')).toBe('reka-lyra')
    expect(composeStyleId('reka', 'mira')).toBe('reka-mira')
  })

  it('defaults base to reka when not provided for visual styles', () => {
    expect(composeStyleId(undefined, 'luma')).toBe('reka-luma')
    expect(composeStyleId(undefined, 'vega')).toBe('reka-vega')
  })

  it('passes through canonical styles unchanged', () => {
    expect(composeStyleId('reka', 'hui')).toBe('hui')
    expect(composeStyleId('reka', 'new-york')).toBe('new-york')
    expect(composeStyleId('reka', 'default')).toBe('default')
  })

  it('passes through already-composed style identifiers unchanged', () => {
    // If `style` already contains a dash (e.g. user pre-composed it or set
    // it directly via --style flag), don't double-prefix.
    expect(composeStyleId('reka', 'reka-luma')).toBe('reka-luma')
    expect(composeStyleId('reka', 'reka-vega')).toBe('reka-vega')
  })
})
