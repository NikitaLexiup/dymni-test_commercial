const animItems = document.querySelectorAll('.__anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHaight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 9;

            let animItemPoint = window.innerHeight - animItemHaight / animStart;

            if (animItemHaight > window.innerHeight) {
                animItemPoint = window.animItemHaight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHaight)) {
                animItem.classList.add('__active_scroll');
            } //else {
              // animItem.classList.remove('__active_scroll');
            //}
        }
    }
    
    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =  window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll();
}