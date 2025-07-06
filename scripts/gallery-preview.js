console.log("✅ gallery-preview.js loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  if (!gallery) {
    console.warn("⚠️ No #gallery div found in DOM.");
    return;
  }

  gallery.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;

    const id = item.getAttribute("id");
    console.log("🖱️ Clicked .gallery-item with ID:", id);

    if (id) {
      const redirectURL = "/src/preview.html?id=" + encodeURIComponent(id);
      console.log("➡️ Redirecting to:", redirectURL);
      window.location.href = redirectURL;
    } else {
      console.warn("⚠️ Clicked item has no ID.");
    }
  });
});
