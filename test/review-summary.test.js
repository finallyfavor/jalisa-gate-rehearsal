import assert from "node:assert/strict";
import test from "node:test";

import { formatReviewCounts } from "../src/review-summary.js";

test("formats singular and plural review counts", () => {
  assert.equal(formatReviewCounts({ blockers: 1, advisories: 0 }), "1 blocker, 0 advisories");
  assert.equal(formatReviewCounts({ blockers: 0, advisories: 2 }), "0 blockers, 2 advisories");
});

test("rejects counts that cannot represent ledger totals", () => {
  assert.throws(() => formatReviewCounts({ blockers: -1, advisories: 0 }), TypeError);
  assert.throws(() => formatReviewCounts({ blockers: 0.5, advisories: 0 }), TypeError);
});
