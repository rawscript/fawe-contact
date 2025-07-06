// 🖼️ Image storage mapped by ID
const imageMap = {
  g_r_1: [
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.53_c5b6546b.jpg",
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.54_d3f8650e.jpg",
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.26.01_2310cc10.jpg"
  ],
  g_r_2: [
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.26.01_85d33a52.jpg",
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.48_608fce5a.jpg",
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.48_608fce5a.jpg"
  ],
  g_r_3: [
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.57_0f00cd65.jpg"
  ],
  g_r_4: [
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.56_9f877440.jpg",
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.55_9adbdb8c.jpg"
  ],
  g_r_5: [
    "https://fawe-tuseme.onrender.com/public/images/WhatsApp%20Image%202025-06-28%20at%2010.25.55_73366764.jpg",
    "https://fawe-tuseme.onrender.com/public/images/1.jpg"
  ]
};

// 🔍 Helper: Get query parameter
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// 🎨 Display images
const showImages = () => {
  const id = getQueryParam("id");
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear existing content, just in case

  if (!id) {
    gallery.innerHTML = `<p style="color:red;">No ID specified in the URL.</p>`;
    return;
  }

  const images = imageMap[id];

  if (!images || images.length === 0) {
    gallery.innerHTML = `<p>No images found for <strong>${id}</strong>.</p>`;
    return;
  }

  // Optional: Add a header
  const heading = document.createElement("h2");
  heading.textContent = `Gallery: ${id}`;
  heading.style.marginBottom = "20px";
  gallery.appendChild(heading);

  // Load each image
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = id;
    img.style.margin = "10px";
    img.style.maxWidth = "300px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    gallery.appendChild(img);
  });
};

// Run when DOM is ready
window.addEventListener("DOMContentLoaded", showImages);
