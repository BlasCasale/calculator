const btn = Array.from(document.getElementsByTagName('button'))
const display = document.getElementById('display')

btn.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case "CE": 
                display.innerText = ""
                break;

            case "⬅":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;

            case "=":
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "Error"
                }
                break;

            default:
                display.innerText += e.target.innerText
        }
    })
})