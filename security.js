if (window.location.pathname.includes("season-one.html")) {
  let logoutShown = false;

  // Push a dummy state to trap the back button
  window.history.pushState({ page: "season" }, "", "");

  // Listen for back navigation
  window.addEventListener("popstate", function () {
    if (!logoutShown) {
      logoutShown = true;
      checkLogout(); // Show your poetic logout modal
      window.history.pushState({ page: "season" }, "", "");
    }
  });
}
