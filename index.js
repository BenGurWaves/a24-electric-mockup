document.addEventListener('DOMContentLoaded', () => {
  initEmailCopy();
});

function initEmailCopy() {
  const emailBtn = document.getElementById('email-btn');
  const badge = document.getElementById('copy-badge');
  if (!emailBtn || !badge) return;

  emailBtn.addEventListener('click', () => {
    const email = emailBtn.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(() => {
      badge.textContent = 'COPIED';
      badge.style.background = 'rgba(201,124,74,0.15)';
      setTimeout(() => {
        badge.textContent = 'Copy';
        badge.style.background = '';
      }, 1600);
    });
  });
}
