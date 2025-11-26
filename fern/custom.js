// Floating Action Button for Plant Room
(function() {
  // Create the floating action button
  const fab = document.createElement('button');
  fab.id = 'plant-store-fab';
  fab.innerHTML = '🌿';
  fab.setAttribute('aria-label', 'Visit The Plant Room');
  fab.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5C4331 0%, #7D5A3F 100%);
    border: 2px solid #FCF9F2;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Add hover effect
  fab.addEventListener('mouseenter', function() {
    fab.style.transform = 'scale(1.1)';
    fab.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
  });

  fab.addEventListener('mouseleave', function() {
    fab.style.transform = 'scale(1)';
    fab.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  });

  // Add click handler to navigate to the website
  fab.addEventListener('click', function() {
    window.location.href = 'https://justin.douville.docs.buildwithfern.com';
  });

  // Append to body when DOM is ready
  if (document.body) {
    document.body.appendChild(fab);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(fab);
    });
  }
})();
