export default function(){
    const main = document.querySelector('main')
    const root = document.querySelector(':root')
    
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
    }