document.getElementById("footer").innerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      
      <!-- Impact Section -->
      <div class="footer-col impact">
        <h3>Our Impact</h3>
        <span>1,200+ students impacted</span>
        <span>17+ workshops</span>
        <span>12+ schools visited</span>
      </div>

      <!-- Resources & Contact -->
      <div class="footer-col resources">
        <h3>Resources</h3>
        <ul>
          <li><a href="#roadmaps">Career Roadmaps</a></li>
          <li><a href="#resources">Toolkits</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#apply">Volunteer</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="footer-col newsletter">
        <h3>📩 Newsletter</h3>
        <p>Stay updated with career insights, toolkits, and Ignitra events!</p>
        <form id="newsletterForm">
          <input 
            type="email" 
            id="newsletterEmail" 
            placeholder="Enter your email" 
            required
          >
          <button class="cta-btn" type="submit">Subscribe</button>
          <p id="newsletterMsg"></p>
        </form>
      </div>
    </div>

    <!-- Socials & Copyright -->
    <div class="footer-bottom">
      <div class="socials">
        <a href="https://www.instagram.com/ignitra.yc?utm_source=ig_web_button_share_sheet&igsh=MWgzbXJyZXIwYm91aw=="><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-discord"></i></a>
        <a href="https://www.linkedin.com/company/ignitra-youth-council/"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:ignitrayouthcouncil@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
      <p>&copy; 2025 Ignitra Youth Council. All rights reserved.</p>
    </div>
  </footer>
`;

// Newsletter validation logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailField = document.getElementById("newsletterEmail");
    const msg = document.getElementById("newsletterMsg");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailField.value.match(emailPattern)) {
      msg.style.color = "lightgreen";
      msg.textContent = "✅ Thank you for subscribing!";
      emailField.value = "";
    } else {
      msg.style.color = "salmon";
      msg.textContent = "❌ Please enter a valid email address.";
    }
  });
});




/*

document.getElementById("footer").innerHTML =`
  <footer class="footer">
    <div class="impact">
      <span>1,200+ students impacted</span>
      <span>17+ workshops</span>
      <span>12+ schools visited</span>
    </div>
    <div class="socials">
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
      <a href="#"><i class="fab fa-discord"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:ignitrayouth@gmail.com"><i class="fas fa-envelope"></i></a>
    </div>
    <p style="margin-top: 1rem;">&copy; 2025 Ignitra Youth Council. All rights reserved.</p>
  </footer>
  `;
*/