import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

const {login,user,logout}=React.useContext(ChatContext)

    return (
        <nav className="navbar justify-content-center navbar-dark bg-dark">
            {user.activo?
            ( <button onClick={logout} type="button" className="btn btn-danger">Salir</button>)
            :
            (<button onClick={login} type="button" className="btn btn-success">Entrar</button>)}
            
           
        </nav>
    )
}

export default Navbar
