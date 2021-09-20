//using selectors inside the element
// traversing the dom

const quesTions = document.querySelectorAll('.question')
console.log(quesTions)

quesTions.forEach((question)=>{
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click',()=>{
       
    question.classList.toggle('show-text')
        
    })
})