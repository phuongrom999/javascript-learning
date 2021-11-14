const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const id = e.target.dataset.id
        const content = document.getElementById(id)
        const active = document.querySelector('.tab-btn.active')
        const activeContent = document.querySelector('.content.active')
        console.log(activeContent)
        console.log(active)
        content.classList.remove('active')
        if(active&&activeContent){
            active.classList.remove('active')
           activeContent.classList.remove('active')
        }
        content.classList.add('active')
        e.target.classList.add('active')
    })
    
})