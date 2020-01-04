import('./style.scss')

function app() {
    let div = document.createElement('div')
    div.setAttribute('id', 'app')
    div.innerHTML = 'hello,shuwang.'
    document.body.appendChild(div)
}

app()