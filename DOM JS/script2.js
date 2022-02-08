const div = document.createElement('div');
div.innerText = "Olá, Devs!"

// insertBefore (adiciona algo antes do elemento)

const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)