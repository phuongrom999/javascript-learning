// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('video')

btn.addEventListener('click',()=>{
    if(btn.classList.contains('slide'))
    {
        btn.classList.remove('slide')
        video.play();
        console.log('đây là điều kiện đúng ',btn.classList.contains('slide'))
    }
    else
    {
        btn.classList.add('slide')
        video.pause()
    }
    
})









const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
    
  });