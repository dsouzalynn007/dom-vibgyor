let alldivs=document.querySelectorAll('div')
alldivs.forEach(ele=>{
    ele.addEventListener('mouseover',e=> e.target.style.background=e.target.textContent)
    ele.addEventListener('mouseleave',e=> e.target.style.background='none')
})