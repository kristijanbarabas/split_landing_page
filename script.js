const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
/*mouseenter event je zapravo hover*/
/*prvo dodajemo*/
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
/*onda mičemo klasu pomoću mouseleave*/
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

/*desna strana*/
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
/*onda mičemo klasu pomoću mouseleave*/
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

