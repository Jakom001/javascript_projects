document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const popoup = document.querySelector('.popup');
    const success = document.querySelector('.success');


    btn.addEventListener('click', () => {
        popoup.classList.add('open');

    })
    success.addEventListener('click', () => {
        popoup.classList.remove('open');
    })

})