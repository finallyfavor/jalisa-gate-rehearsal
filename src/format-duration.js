export function formatDuration(totalSeconds) {
  if (!Number.isSafeInteger(totalSeconds) || totalSeconds < 0) {
    throw new TypeError("totalSeconds must be a non-negative safe integer");
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}
