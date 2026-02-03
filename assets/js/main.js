(function () {
  'use strict'

  // ===== Landing page redirect =====
  var redirectTimer = document.getElementById('redirect-timer')
  if (redirectTimer) {
    var seconds = 3
    var interval = setInterval(function () {
      seconds--
      if (seconds <= 0) {
        clearInterval(interval)
        window.location.href = 'portfolio/'
      }
    }, 1000)
  }

  // ===== Mobile nav toggle =====
  var toggle = document.querySelector('.nav__toggle')
  var navList = document.querySelector('.nav__list')

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('nav__list--open')
      var isOpen = navList.classList.contains('nav__list--open')
      toggle.setAttribute('aria-expanded', isOpen)
      toggle.textContent = isOpen ? '\u2715' : '\u2630'
    })

    // Close nav on link click (mobile)
    var navLinks = navList.querySelectorAll('.nav__link')
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('nav__list--open')
        toggle.setAttribute('aria-expanded', 'false')
        toggle.textContent = '\u2630'
      })
    })
  }

  // ===== Scroll reveal =====
  var revealElements = document.querySelectorAll('.reveal')

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach(function (el) {
      observer.observe(el)
    })
  }
})()
