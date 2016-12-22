if (Meteor && Meteor.release) require('document-register-element')

const mirror = document.createElement('div')
hideMirror()
document.body.appendChild(mirror)

class Input extends HTMLInputElement {
    constructor() {
        super()

        const update = () => {
            mirror.innerText = this.value
            mirror.style.cssText = getComputedStyle(this).cssText
            hideMirror()
            this.style.width = `calc(1em + ${mirror.clientWidth}px)`
        }
        this.addEventListener('keypress', update)
        this.addEventListener('keyup', update)
        this.addEventListener('keydown', update)
    }
}
window.customElements.define('growing-input', Input, {extends: 'input'})

function hideMirror() {
    mirror.style.visibility = 'hidden'
    mirror.style.position = 'absolute'
    mirror.style.whiteSpace = 'pre'
    mirror.style.left = '0'
    mirror.style.width = ''
}

Object.defineProperty(exports, "__esModule", {
    value: true
})

exports["default"] = Input
exports["Input"] = Input