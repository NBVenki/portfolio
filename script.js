// Smooth scrolling functionality for anchor links
document.addEventListener("DOMContentLoaded", () => {
    // Select all anchor links that start with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    // Add click event listeners to each link
    smoothScrollLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default anchor behavior
  
        // Get the target element to scroll to
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Smooth scroll to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start', // Align the scroll at the top of the element
          });
        }
      });
    });
  });
  