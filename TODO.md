# TODO

- [ ] Confirm the exact runtime error by running the server (optional)
- [ ] Fix `server/controllers/resumeController.js` compile error (duplicate `deleteResume` export)
- [ ] Fix incorrect response payload in the duplicate handler (should return `resume`, not `Resume`)
- [ ] Rename the second handler to a correct export name (e.g., `getResumeById`) so it can be used by routes
- [ ] Ensure `resumeController.js` imports `Resume` model and uses it (currently missing import)
- [ ] Ensure server/controller filenames match case on Windows/Linux (e.g., `models/USer.js` vs `models/User.js`)
- [ ] Add/verify routes wiring for resume endpoints (since `userRoutes.js` currently only has user endpoints)
- [ ] Run backend lint/test: `npm test` or start server and verify endpoints

