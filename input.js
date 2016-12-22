class Input extends HTMLElement {
    constructor() {
        super()

        this.nativeElement = document.createElement('input')
        const mirror = document.createElement('div')
        hideMirror()

        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.nativeElement)
        shadow.appendChild(mirror)

        const update = () => {
            mirror.innerText = this.nativeElement.value
            mirror.style.cssText = getComputedStyle(this.nativeElement).cssText
            hideMirror()
            this.nativeElement.style.width = `calc(1em + ${mirror.clientWidth}px)`
        }
        this.nativeElement.addEventListener('keypress', update)
        this.nativeElement.addEventListener('keyup', update)
        this.nativeElement.addEventListener('keydown', update)

        function hideMirror() {
            mirror.style.visibility = 'hidden'
            mirror.style.position = 'absolute'
            mirror.style.whiteSpace = 'pre'
            mirror.style.left = '0'
            mirror.style.width = ''
        }
    }
}


Object.defineProperty(exports, "__esModule", {
    value: true
})

window.customElements.define('growing-input', Input)
exports["default"] = Input
exports["Input"] = Input