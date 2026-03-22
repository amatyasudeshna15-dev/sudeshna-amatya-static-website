class Header extends HTMLElement {
  connectedCallback() {
      // Current path to determine active link
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      
      this.innerHTML = `
          <header>
              <nav class="navbar">
                  <a href="index.html" class="nav-brand">IT Pro<span style="color:var(--primary-blue);">.</span></a>
                  <ul class="nav-links">
                      <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                      <li><a href="skills.html" class="${currentPath === 'skills.html' ? 'active' : ''}">Skills</a></li>
                      <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
                  </ul>
                  <button class="mobile-menu-btn" aria-label="Toggle menu">
                      ☰
                  </button>
              </nav>
          </header>
      `;
      
      // Mobile menu toggle logic
      const toggleBtn = this.querySelector('.mobile-menu-btn');
      const navLinks = this.querySelector('.nav-links');
      
      toggleBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          if (navLinks.classList.contains('active')) {
              toggleBtn.innerHTML = '✕';
          } else {
              toggleBtn.innerHTML = '☰';
          }
      });
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
      const year = new Date().getFullYear();
      this.innerHTML = `
          <footer>
              <div class="footer-content">
                  <h3>Systems Administrator Portfolio</h3>
                  <p>Specializing in Linux, Server Management & Microsoft Office Deployments</p>
                  <div style="margin: 1.5rem 0;">
                      <a href="contact.html" class="btn btn-blue" style="padding: 0.5rem 1rem;">Get in Touch</a>
                  </div>
                  <p style="font-size: 0.9rem; margin-top: 2rem;">&copy; ${year} All rights reserved. Designed with ❤️</p>
              </div>
          </footer>
      `;
  }
}

// Define the custom web components
customElements.define('custom-header', Header);
customElements.define('custom-footer', Footer);
