// Blog enhancements
// Adds interactive features to blog pages

document.addEventListener('DOMContentLoaded', function () {
  // Only run on blog pages
  if (window.location.pathname.includes('/blog/')) {
    initBlogFeatures()
  }
})

function initBlogFeatures() {
  addReadingProgress()
  addBackToTop()
  enhanceImages()
}

// Reading progress indicator
function addReadingProgress() {
  // Create progress bar
  const progressBar = document.createElement('div')
  progressBar.id = 'reading-progress'
  progressBar.innerHTML = '<div id="progress-fill"></div>'
  document.body.insertBefore(progressBar, document.body.firstChild)

  // Update progress on scroll
  window.addEventListener('scroll', updateReadingProgress)
}

function updateReadingProgress() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const scrollPercentage = (scrollTop / scrollHeight) * 100

  const progressFill = document.getElementById('progress-fill')
  if (progressFill) {
    progressFill.style.width = scrollPercentage + '%'
  }
}

// Back to top button
function addBackToTop() {
  const backToTop = document.createElement('button')
  backToTop.id = 'back-to-top'
  backToTop.innerHTML = '↑'
  backToTop.title = 'Back to top'
  document.body.appendChild(backToTop)

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible')
    } else {
      backToTop.classList.remove('visible')
    }
  })

  // Scroll to top when clicked
  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

// Enhance images with click-to-zoom
function enhanceImages() {
  const images = document.querySelectorAll('img:not(.nav-star)')

  images.forEach((img) => {
    img.style.cursor = 'pointer'
    img.addEventListener('click', function () {
      // Create overlay
      const overlay = document.createElement('div')
      overlay.classList.add('image-overlay')

      // Create enlarged image
      const enlargedImg = document.createElement('img')
      enlargedImg.src = this.src
      enlargedImg.alt = this.alt
      enlargedImg.classList.add('enlarged-image')

      overlay.appendChild(enlargedImg)
      document.body.appendChild(overlay)

      // Close on click
      overlay.addEventListener('click', function () {
        document.body.removeChild(overlay)
      })

      // Close on escape key
      document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay)
          }
          document.removeEventListener('keydown', closeOnEscape)
        }
      })
    })
  })
}
