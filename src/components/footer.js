class LFooter extends HTMLElement {
  connectedCallback() {
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
              <a href="src/about.html" target="_self">About Us</a>
              <a href="src/about.html">Membership</a>
              <a href="src/gallery.html">Gallery</a>
              <a href="src/blog.html" target="_self">Blog</a>
              <a href="src/contact.html" target="_self">Join Us</a>
            </div>

            <div class="footer-section">
              <h3>Activities</h3>
              <a href="#">Leadership Workshops</a>
              <a href="#">Community Service</a>
              <a href="#">Innovation Challenges</a>
              <a href="#">Personal Development</a>
              <a href="#">Skill Building</a>
              <a href="#">Social Impact</a>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <a href="#">Member Portal</a>
              <a href="#">Event Calendar</a>
              <a href="#">Resource Library</a>
              <a href="#">Volunteer Opportunities</a>
              <a href="#">Newsletter</a>
              <a href="#">Alumni Network</a>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2025 Fawe Tuseme Club. All rights reserved. | Privacy Policy | Terms of Service by IEEE MMU CS</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('lr-footer',LFooter);
y