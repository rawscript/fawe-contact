class LHeader extends HTMLElement {
  connectedCallback() {
    // Get the 'makeunseeable' attribute and normalize into an array
    const hiddenItems = (this.getAttribute('makeunseeable') || '')
      .split(',')
      .map(item => item.trim().toLowerCase());

    this.innerHTML = `
      <header id="nav-header" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 9999; background-color: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px);">
        <nav id="nav-container" style="display: flex; justify-content: center; align-items: center; padding: 1rem;">
          <ul id="nav-list" style="list-style: none; display: flex; gap: 2rem; margin: 0; padding: 0;">
            <li id="nav-home"><a href="../../index.html">Home</a></li>
            <li id="nav-about"><a href="about.html">About Us</a></li>
            <li id="nav-gallery"><a href="gallery.html">Gallery</a></li>
            <li id="nav-blog"><a href="blog.html">Blog</a></li>
            <li id="nav-join"><a href="contact.html">Join Us</a></li>
          </ul>
        </nav>
      </header>
    `;

    // Hide the specified items after rendering
    hiddenItems.forEach(id => {
      const target = this.querySelector(`#nav-${id}`);
      if (target) {
        target.style.display = 'none';
      }
    });
  }
}

customElements.define('lr-header', LHeader);
