// Header component for Korey's website
// Automatically detects page location and creates appropriate navigation

// Function to determine relative path based on current page location
function getRelativePath() {
  const currentPath = window.location.pathname

  // If we're in a blog subdirectory, need to go up one level
  if (currentPath.includes('/blog/')) {
    return '../'
  }

  // If we're in root directory, no relative path needed
  return ''
}

// Function to get page title based on current page
function getPageTitle() {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html'

  const pageTitles = {
    'home.html': "Korey's Web Development Journey",
    'about-me.html': 'About Me',
    'projects.html': 'Projects',
    'blogs.html': 'Blogs',
  }

  // For blog pages, extract title from document title or use default
  if (window.location.pathname.includes('/blog/')) {
    return document.title || 'Blog Post'
  }

  return pageTitles[currentPage] || "Korey's Web Development Journey"
}

// Function to get current page for navigation highlighting
function getCurrentPage() {
  const currentPath = window.location.pathname
  const currentPage = currentPath.split('/').pop() || 'home.html'

  // Remove file extension for comparison
  return currentPage.replace('.html', '')
}

// Main function to create and inject header
function createHeader(customTitle = null) {
  const relativePath = getRelativePath()
  const pageTitle = customTitle || getPageTitle()
  const currentPage = getCurrentPage()

  const headerHTML = `
    <header>
      <nav class="nav-bar">
        <ul class="nav-bar">
          <li class="nav-bar">
            <a href="${relativePath}home.html" ${
    currentPage === 'home' ? 'class="current-page"' : ''
  }>
              <span class="nav-star">&#8902;</span> Home
            </a>
          </li>
          <li class="nav-bar">
            <a href="${relativePath}about-me.html" ${
    currentPage === 'about-me' ? 'class="current-page"' : ''
  }>
              <span class="nav-star">&#8902;</span> About Me
            </a>
          </li>
          <li class="nav-bar">
            <a href="${relativePath}projects.html" ${
    currentPage === 'projects' ? 'class="current-page"' : ''
  }>
              <span class="nav-star">&#8902;</span> Projects
            </a>
          </li>
          <li class="nav-bar">
            <a href="${relativePath}blogs.html" ${
    currentPage === 'blogs' ? 'class="current-page"' : ''
  }>
              <span class="nav-star">&#8902;</span> Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `

  // Find existing header and replace it, or insert at beginning of body
  const existingHeader = document.querySelector('header')
  if (existingHeader) {
    existingHeader.outerHTML = headerHTML
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML)
  }

  // Initialize navigation highlighting and other features
  initHeaderFeatures()
}

// Initialize header-related features
function initHeaderFeatures() {
  // Add hover effects to navigation stars
  const navStars = document.querySelectorAll('.nav-star')
  navStars.forEach((star) => {
    star.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.2)'
      this.style.transition = 'transform 0.2s ease'
    })

    star.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)'
    })
  })
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  createHeader()
})

// Export function for manual initialization
window.createHeader = createHeader
