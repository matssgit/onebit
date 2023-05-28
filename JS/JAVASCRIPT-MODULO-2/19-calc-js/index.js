const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charkey').forEach(function(charkeyBtn) {
    charkeyBtn.addEventListener('click', function(){
        const value = charkeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark') {
        root.style.setPropety('--bg-color', '#f1f5f9')
        root.style.setPropety('--border-color', '#aaa')
        root.style.setPropety('--font-color', '#212529')
        root.style.setPropety('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setPropety('--bg-color', '#212529')
        root.style.setPropety('--border-color', '#666')
        root.style.setPropety('--font-color', '#f1f5f9')
        root.style.setPropety('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
    })
