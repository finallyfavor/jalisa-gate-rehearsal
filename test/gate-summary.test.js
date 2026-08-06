import assert from "node:assert/strict";
import test from "node:test";

import { summarizeGate } from "../src/gate-summary.js";

test("permits only a zero-blocker, zero-thread summary", () => {
  assert.deepEqual(summarizeGate({ blockers: 0, unresolvedThreads: 0 }), {
    mergeAllowed: true,
    message: "review evidence is clean",
  });
  assert.deepEqual(summarizeGate({ blockers: 1, unresolvedThreads: 0 }), {
    mergeAllowed: false,
    message: "1 blocker(s), 0 unresolved thread(s)",
  });
  assert.deepEqual(summarizeGate({ blockers: 0, unresolvedThreads: 2 }), {
    mergeAllowed: false,
    message: "0 blocker(s), 2 unresolved thread(s)",
  });
});

test("rejects counts that cannot represent review evidence", () => {
  assert.throws(() => summarizeGate({ blockers: -1, unresolvedThreads: 0 }), TypeError);
  assert.throws(() => summarizeGate({ blockers: 0.5, unresolvedThreads: 0 }), TypeError);
  assert.throws(() => summarizeGate({ blockers: 0, unresolvedThreads: Number.MAX_SAFE_INTEGER + 1 }), TypeError);
});
