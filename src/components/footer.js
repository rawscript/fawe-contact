class LFooter extends HTMLElement {
  connectedCallback() {
    const basePath = window.location.pathname.includes('/src/') ? '/src/' : 'src/';

    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Fawe Tuseme Club</h3>
              <p>FAWE Kenya First Parklands Avenue & Masari Road Nairobi, Kenya</p>
              <p>Phone: 0705 474843</p>
              <p>Email: hello@empowermentclub.org</p>
            </div>
            
            <div class="footer-section">
              <h3>Quick Links</h3>
              <a href="${basePath}about.html">About Us</a>
              <a href="${basePath}about.html">Membership</a>
              <a href="${basePath}gallery.html">Gallery</a>
              <a href="${basePath}blog.html">Blog</a>
              <a href="${basePath}contact.html">Join Us</a>
            </div>

            <!-- Rest of your sections remain untouched -->

          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 Fawe Tuseme Club. All rights reserved. | Privacy Policy | Terms of Service by IEEE MMU CS</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('lr-footer', LFooter);
