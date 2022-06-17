window.onscroll = () => {
    const nav = document.querySelector ('.header')
    const Y = window.scrollY
    
    if(Y > 50) {
    nav.classList.add ('header_fixed')
    } else if(Y < 50) {
      nav.classList.remove ('header_fixed')
      }
  }