document.querySelector('.menu_btn').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToBuySection = document.querySelector('.choose_color')
    targetToBuySection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.menu_info').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToInfoSection = document.querySelector('.advantages')
    targetToInfoSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.menu_product').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToProductSection = document.querySelector('.composition')
    targetToProductSection.scrollIntoView({
        behavior: 'smooth'
    });
});


