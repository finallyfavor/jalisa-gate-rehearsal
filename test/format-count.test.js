import assert from "node:assert/strict";
import test from "node:test";

import { formatCount } from "../src/format-count.js";

test("formats singular, plural, and irregular labels", () => {
  assert.equal(formatCount(0, "attempt"), "0 attempts");
  assert.equal(formatCount(1, "attempt"), "1 attempt");
  assert.equal(formatCount(2, "attempt"), "2 attempts");
  assert.equal(formatCount(2, "category", "categories"), "2 categories");
});

test("rejects invalid counts", () => {
  assert.throws(() => formatCount(-1, "attempt"), TypeError);
  assert.throws(() => formatCount(0.5, "attempt"), TypeError);
  assert.throws(() => formatCount(Number.MAX_SAFE_INTEGER + 1, "attempt"), TypeError);
});

test("rejects empty labels", () => {
  assert.throws(() => formatCount(1, ""), TypeError);
  assert.throws(() => formatCount(1, "   "), TypeError);
  assert.throws(() => formatCount(2, "attempt", ""), TypeError);
});
