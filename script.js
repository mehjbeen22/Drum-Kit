const arrayOfDrums = document.getElementById('parent');

arrayOfDrums.addEventListener('click', (e)=>{
    let target = e.target.innerHTML;
    createSound(target);
    buttonAnimation(target);
});

arrayOfDrums.addEventListener('keydown', (e)=>{
    let target = e.key;
    let array = ['w','a','d','j','k','l','s'];
    if(array.includes(target)===false){
        alert("Wrong Key Press");
        return;
    }

    createSound(target);
    buttonAnimation(target);


});

const createSound = (key) =>{
    let sound = new Audio(`sounds/${key}.mp3`);
    sound.play();
}

const buttonAnimation = (key) =>{
    let active = document.querySelector(`.${key}`);
    active.classList.add('pressed');

    setTimeout(()=>{
        active.classList.remove('pressed');
    },100)
}
