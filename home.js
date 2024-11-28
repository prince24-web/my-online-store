const toggleButton = 
    document.querySelector('.account');
    const container = document.querySelector('.background')

    toggleButton.addEventListener('click',() => {
        container.classList.toggle('dark-mode')
    });