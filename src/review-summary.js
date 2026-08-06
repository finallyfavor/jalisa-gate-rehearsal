export function formatReviewCounts({ blockers, advisories }) {
  for (const [name, value] of Object.entries({ blockers, advisories })) {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new TypeError(`${name} must be a non-negative safe integer`);
    }
  }

  return `${blockers} blocker${blockers === 1 ? "" : "s"}, ${advisories} advisor${advisories === 1 ? "y" : "ies"}`;
}
