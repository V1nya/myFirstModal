let fruits = [
    {id: 1, title: 'Apple', price: 20, img: 'https://th.bing.com/th/id/OIP.ULQaySj7vOYuiRWZtyb3YwHaHa?pid=ImgDet&rs=1'},
    {
        id: 2,
        title: 'Orange',
        price: 25,
        img: 'https://th.bing.com/th/id/OIP.PM1nXT_X5s0MrJ664BgomAHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.25&pid=1.7'
    },
    {
        id: 3,
        title: 'Mango',
        price: 23,
        img: 'https://th.bing.com/th/id/R.6594612403d898559c447169db2b4b76?rik=khIDfUP844UsgA&pid=ImgRaw&r=0'
    },
    {id: 4 , title: 'Pineapple', price: 29,img:"data:image/jpeg;base64,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"}

]

const toHTML = fruit =>
    `
        <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" style="width: 200px" src=${fruit.img} alt=${fruit.title}>
                    <div class="card-body">
                        <h5 class="card-title">${fruit.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" data-id="${fruit.id}"  data-btn="price">Check price</a>
                        <a href="#" class="btn btn-danger" data-id="${fruit.id}" data-btn="delete">Delete</a>

                    </div>
                </div>
         </div>
`


const priceModal = $.modal({
    title: "Price",
    closable: true,
    width: '200px',
    footerButtons: [
        {
            text: 'Close', type: 'primary', handler() {
                priceModal.close()
            }
        },

    ]
})


let render = () => {
    const html = fruits.map(fruit => toHTML(fruit)).join('')
    document.querySelector('#fruts').innerHTML = html
}
render()


document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id == id)
    if (btnType === 'price') {
        priceModal.open()
        priceModal.setContent(`
 <p>${fruit.title}: ${fruit.price} UAN</p>
`)
    } else if (btnType === 'delete') {

        $.confirm({
            content: `
        <p> ${fruit.title} </p>
        `
        })
            .then(() => {
                    fruits = fruits.filter(f => f.id != id)
                    render()
                }
            )
            .catch(() => {
                    console.log('Cancel')
                }
            )

    }
})

