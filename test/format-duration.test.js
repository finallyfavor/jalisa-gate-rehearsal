import assert from "node:assert/strict";
import test from "node:test";

import { formatDuration } from "../src/format-duration.js";

test("formats non-negative durations", () => {
  assert.equal(formatDuration(0), "0m 0s");
  assert.equal(formatDuration(59), "0m 59s");
  assert.equal(formatDuration(60), "1m 0s");
  assert.equal(formatDuration(125), "2m 5s");
});

test("rejects invalid durations", () => {
  assert.throws(() => formatDuration(-1), TypeError);
  assert.throws(() => formatDuration(0.5), TypeError);
  assert.throws(() => formatDuration(Number.MAX_SAFE_INTEGER + 1), TypeError);
});
