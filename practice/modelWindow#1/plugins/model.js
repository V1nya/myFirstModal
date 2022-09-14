Element.prototype.appendAfrer = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {
}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')


    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop
        wrap.appendChild($btn)
    })


    return wrap
}


function _createModal(options = {
    title: "Modal title",
    connect: '',
    width: '600px',
    closable: true
}) {
    const mod = document.createElement('div')
    mod.classList.add('vmodal')
    mod.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width}">
            <div class="modal-header">
                <span class="modal-title" >${options.title}</span>
                ${options.closable ? `<span class="modal-close" data-close="true">&times</span>` : ''}
            </div>
            <div class="modal-body" data-content>
            ${options.connect}
            </div>
            
        </div>
    </div>    
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfrer(mod.querySelector('[data-content]'))
    document.body.appendChild(mod)
    return mod

}


$.modal = function (options) {
    const ANIMATION_SPEED = 300
    const $modal = _createModal(options)
    let closing = false
    let distro = false


    const modal = {
        open() {
            if (distro)
                return console.log('Modal is destroyed')
            if (!closing) {
                $modal.classList.add('open')
            }
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
                if (typeof options.onClose ==='function'){
                    options.onClose()
                }
            }, ANIMATION_SPEED)

        },
        destroy() {


        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal,
        {
            destroy() {
                $modal.removeEventListener('click', listener)
                $modal.parentNode.removeChild($modal)
                distro = true
            },
            setContent(html) {
                $modal.querySelector('[data-content]').innerHTML = html
            }
        })


}
