document.querySelectorAll('.question-title').forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const icon = title.querySelector('.round-icon');

        document.querySelectorAll('.question-content.open').forEach((openContent) => {
            if (openContent !== title.nextElementSibling) {
                openContent.classList.remove('open');
                openContent.style.maxHeight = null;
                const openIcon = openContent.previousElementSibling.querySelector('.round-icon');
                openIcon.classList.remove('rotate');
            }
        });
        
        
        content.classList.toggle('open');
        icon.classList.toggle('rotate');

        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
