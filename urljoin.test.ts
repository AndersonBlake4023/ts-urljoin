import assert from "node:assert/strict";
import { joinUrlPath } from "./urljoin.ts";

assert.equal(joinUrlPath("https://example.com/", "/docs/", "intro"), "https://example.com/docs/intro");
assert.equal(joinUrlPath("", "assets", "image.png"), "assets/image.png");
