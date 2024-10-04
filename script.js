window.onload = function () {
    const logo = document.querySelector('main img');
    const text = document.querySelector('main p');
    const input = document.querySelector('main input');

    logo.style.opacity = '0';
    text.style.opacity = '0';
    input.style.opacity = '0';

    setTimeout(() => {
        logo.style.transition = 'opacity 1s ease-in';
        logo.style.opacity = '1';
    }, 200);

    setTimeout(() => {
        text.style.transition = 'opacity 1s ease-in';
        text.style.opacity = '1';
    }, 600);

    setTimeout(() => {
        input.style.transition = 'opacity 1s ease-in';
        input.style.opacity = '1';
    }, 1000);
};


document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        console.log('Searching for:', query);

    }
});


