import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: 'mobile',
    once: false,
    duration: 1000,
    easing: 'cubic-bezier(0.72, 0, 0.21, 1)'
  })
}
