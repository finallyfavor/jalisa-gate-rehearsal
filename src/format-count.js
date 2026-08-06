export function formatCount(count, singular, plural = `${singular}s`) {
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new TypeError("count must be a non-negative safe integer");
  }
  if (typeof singular !== "string" || singular.trim().length === 0) {
    throw new TypeError("singular must be a non-empty string");
  }
  if (typeof plural !== "string" || plural.trim().length === 0) {
    throw new TypeError("plural must be a non-empty string");
  }

  return `${count} ${count === 1 ? singular : plural}`;
}
