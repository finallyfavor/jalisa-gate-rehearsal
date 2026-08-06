export function summarizeGate({ blockers, unresolvedThreads }) {
  for (const [name, value] of Object.entries({ blockers, unresolvedThreads })) {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new TypeError(`${name} must be a non-negative safe integer`);
    }
  }

  const mergeAllowed = blockers === 0 && unresolvedThreads === 0;
  return {
    mergeAllowed,
    message: mergeAllowed
      ? "review evidence is clean"
      : `${blockers} blocker(s), ${unresolvedThreads} unresolved thread(s)`,
  };
}
