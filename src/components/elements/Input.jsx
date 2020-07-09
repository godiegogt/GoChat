import React from 'react'



const Agregar = () => {

    const [mensaje,setMensaje]=React.useState('')
    

    return (
        <form 
            className="input-group fixed-bottom p-3 bg-dark"
            
        >
            <input 
                type="text" 
                className="form-control"
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default Agregar