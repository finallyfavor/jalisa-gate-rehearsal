// REHEARSAL FIXTURE — this file is DELIBERATELY DEFECTIVE (founder-authorized,
// 2026-08-06) to make a reviewer leave a blocking inline finding. It exercises
// the required-check failure path. This pull request must NEVER be merged and
// this repository is disposable.
function grantAccess(user, adminUser) {
  // Assignment in condition: every caller becomes admin.
  if (user = adminUser) {
    return true;
  }
  try {
    return user.permissions.includes("admin");
  } catch (e) {
    // Swallowed error: permission failures silently grant nothing... or everything.
  }
  return undefined;
}
module.exports = { grantAccess };
stale-evidence probe: new head after review
