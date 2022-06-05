const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const restart = document.querySelector('.restart-button')
const textrestart = document.querySelector('.restart-text')
const nuvem = document.querySelector('.clouds')
const nuvemcopy = document.querySelector('.clouds-copy')

const pular = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    },500 );
}

const loop = setInterval(() => {
    
    const PipePosition = pipe.offsetLeft
    const cloudPosition = nuvem.offsetLeft
    const cloudcopyposition = nuvemcopy.offsetLeft
    const MarioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(PipePosition < 121 && PipePosition > 0 && MarioPosition < 111) {

        pipe.style.animation = 'none'
        pipe.style.left = `${PipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${MarioPosition}px`

        restart.style.display = 'flex'
        textrestart.style.display = 'flex'

        nuvem.style.animation = 'none' 
        nuvem.style.left = `${cloudPosition}px`
        nuvemcopy.style.animation = 'none'
        nuvemcopy.style.left = `${cloudcopyposition}px`
        
    }

})

function restartfunc() {
    document.location.reload(true);
}

document.addEventListener('keydown', pular);