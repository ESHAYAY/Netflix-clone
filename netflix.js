window.onload = function () {
    console.log("Check");

    const list = document.getElementById('postersList');
    const leftBtn = document.querySelector('.scrollLeft');
    const rightBtn = document.querySelector('.scrollRight');

    leftBtn.addEventListener('click', () => {
        list.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        list.scrollBy({ left: 300, behavior: 'smooth' });
    });
};