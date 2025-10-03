// Main JavaScript file for Korey's Website
// This file contains common functionality across all pages

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('Website loaded successfully!')

  // Initialize common functionality
  initNavigation()
  initSmoothScrolling()
})

// Navigation functionality
function initNavigation() {
  // Highlight current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  const navLinks = document.querySelectorAll('.nav-bar a')

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href')
    const linkPage = linkHref.split('/').pop()

    if (
      linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html')
    ) {
      link.classList.add('current-page')
    }
  })
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
}

// Utility function to add fade-in animation to elements
function addFadeInAnimation() {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  })

  elements.forEach((element) => {
    observer.observe(element)
  })
}
