import { describe, expect, it } from "vitest"
import { isLocalFile, isUrl } from "./utils"

describe("isUrl", () => {
  it("accepts what we actually fetch", () => {
    expect(isUrl("https://clientik.github.io/hui-vue/r/button.json")).toBe(true)
    expect(isUrl("http://localhost:3000/r/button.json")).toBe(true)
  })

  it("rejects a Windows path parsed as a scheme", () => {
    // Regression: `new URL()` reads `C:` as a protocol, so an absolute
    // Windows path looked like a URL and the CLI tried to fetch a file that
    // was sitting on disk. Every local add on Windows failed this way.
    expect(isUrl("C:\Users\me\components\item.json")).toBe(false)
    expect(isUrl("C:/Users/me/components/item.json")).toBe(false)
  })

  it("rejects plain paths", () => {
    expect(isUrl("./item.json")).toBe(false)
    expect(isUrl("/Users/me/item.json")).toBe(false)
    expect(isUrl("button")).toBe(false)
  })
})

describe("isLocalFile", () => {
  it("recognises a local registry item on any platform", () => {
    expect(isLocalFile("./item.json")).toBe(true)
    expect(isLocalFile("/Users/me/item.json")).toBe(true)
    expect(isLocalFile("C:\Users\me\item.json")).toBe(true)
  })

  it("does not mistake a remote item for a local one", () => {
    expect(isLocalFile("https://example.com/item.json")).toBe(false)
  })
})
