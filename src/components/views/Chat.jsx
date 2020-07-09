import React from 'react'
import Agregar from '../elements/Input'
import {ChatContext} from '../context/ChatProvider'


export const Chat = () => {

    const {messages,user}=React.useContext(ChatContext)
    return (
        <div className='row'>
            <div className="col-3" ></div>
            <div className="col-9 p-3" style={{height:400}}>
            {
                messages.map((item, index) => (
                    item.uid_envia === user.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge badge-pill badge-primary">{item.message}</span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <span className="badge badge-pill badge-secondary">{item.message}</span>
                        </div>
                    )
                ))
            }
                <Agregar/>
                </div>
            
        </div>
    )
}
