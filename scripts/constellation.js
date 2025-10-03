// Interactive constellation for the homepage
// Makes the star navigation more engaging

document.addEventListener('DOMContentLoaded', function () {
  if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/')
  ) {
    initConstellation()
  }
})

function initConstellation() {
  const stars = document.querySelectorAll('[class^="star"]')

  stars.forEach((star, index) => {
    // Add hover effects
    star.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.5)'
      this.style.transition = 'transform 0.3s ease'
      this.style.filter = 'brightness(1.5)'
    })

    star.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)'
      this.style.filter = 'brightness(1)'
    })

    // Add click animation
    star.addEventListener('click', function (e) {
      // Create a ripple effect
      const ripple = document.createElement('div')
      ripple.classList.add('ripple')
      this.appendChild(ripple)

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple)
        }
      }, 600)
    })

    // Stagger the initial animation
    setTimeout(() => {
      star.style.opacity = '1'
      star.style.transform = 'translateY(0)'
    }, index * 200)
  })
}

// Add twinkling effect to stars
function addTwinkleEffect() {
  const stars = document.querySelectorAll('[class^="star"]')

  setInterval(() => {
    const randomStar = stars[Math.floor(Math.random() * stars.length)]
    randomStar.style.animation = 'twinkle 1s ease-in-out'

    setTimeout(() => {
      randomStar.style.animation = ''
    }, 1000)
  }, 2000)
}
