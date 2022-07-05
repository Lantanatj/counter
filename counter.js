let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let divContainerBody = document.querySelector('.body')

function decrease(){
    header.textContent--
    // divContainerBody.style.backgroundColor = 'indigo'
    if(header.textContent < 0){
        divContainerBody.style.backgroundColor = 'purple'
    }else if (header.textContent > 0){
        divContainerBody.style.backgroundColor = 'cyan'
    }else{
        divContainerBody.style.backgroundColor = 'white'
    }
}

dec.addEventListener('click',decrease)



function increase(){
    header.textContent++
    // divContainerBody.style.backgroundColor = 'cyan'
    if(header.textContent > 0){
        divContainerBody.style.backgroundColor = 'cyan'
    }else if (header.textContent < 0){
        divContainerBody.style.backgroundColor = 'purple'
    }else{
        divContainerBody.style.backgroundColor = 'white'
    }
}

inc.addEventListener('click',increase)

function reset(){
    header.textContent = 0
    // divContainerBody.style.backgroundColor = 'white'
    if(header.textContent == 0){
        divContainerBody.style.backgroundColor = 'white'
    }else if (header.textContent > 0){
        divContainerBody.style.backgroundColor = 'cyan'
    }else{
        divContainerBody.style.backgroundColor = 'white'
    }
}

res.addEventListener('click',reset)