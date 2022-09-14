$.confirm = function (options){
    return new Promise((resolve,reject)=>{
        const modal = $.modal({
            title: "Are you sure?",
            closable: false,
            width: '200px',
            connect:options.content,
            onClose(){
              modal.destroy()
            },

            footerButtons: [
                {text: 'Yes', type: 'primary', handler() {
                        modal.close()
                        resolve()
                    }},
                {text: 'No', type: 'danger', handler() {
                        modal.close()
                        reject()
                    }}

            ]
        })
       setTimeout(()=> modal.open(),100)
    })
}