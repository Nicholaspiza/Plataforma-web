const d = document


const $formEliminar = d.querySelector('.formBtnEliminarModulo');


$formEliminar.addEventListener('submit', e => {
    let confirmacion = confirm('¿Esta seguro que desea eliminar este curso?')

    if(!confirmacion){
        e.preventDefault()
    }
})