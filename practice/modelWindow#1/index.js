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
    {id: 4 , title: 'Pineapple', price: 29,img: 'https://th.bing.com/th/id/R.8d8c3321d201d4abaf93cc261767608d?rik=6nq5SYCWwxck4w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-CWJ6uddhsXY%2fTf9ReMfN2kI%2fAAAAAAAAC1Q%2f68IV9dR73h4%2fs1600%2fpineapple%25255B1%25255D.jpg&ehk=e8asJ3xqYBLbU1lXYGdkkgQh53qAIGIpkCFP%2fbQddFs%3d&risl=&pid=ImgRaw&r=0'},


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

