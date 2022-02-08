const openModal = document.getElementById('openModal');

const invisible = document.querySelector('.invisible')

function clicked() {
    invisible.classList.remove('invisible');
}

openModal.addEventListener('click', clicked);

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey) {
        invisible.classList.add('invisible')
    }
})