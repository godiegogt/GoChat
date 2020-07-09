import React from 'react'
import {firebase} from '../../configs/firebase'

export const ChatContext=React.createContext()
const ChatProvider = (props) => {

    const [user,setUser]=React.useState({uid:null,email:null,loading:false,activo:false})
    const [messages,setMessages]=React.useState([])

    
    React.useEffect(()=>{
        readUser()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const readUser=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
           if(user){

            setUser({uid:user.uid,email:user.email,loading:false,activo:true})
            readMessages()

           }else{
            console.log('No está autenticado')
            setUser({uid:null,email:null,loading:false,activo:false})

           }

        })

    }

    const logout=()=>{
        firebase.auth().signOut()
    }
    
    
    
    const login = async ()=>{
        try {
            setUser({uid:null,email:null,loading:true,activo:false})

            const provider = new firebase.auth.GoogleAuthProvider();
            
            await firebase.auth().signInWithPopup(provider)
            console.log("Usted se acaba de autenticar")
            
            
        } catch (error) {
            console.log(error)
            
        }  

    }

    const readMessages=()=>{
        try {
            firebase.firestore().collection('messages').orderBy('fecha').onSnapshot(query=>{
                const arrayMessages=query.docs.map((document,index)=>document.data())
                setMessages(arrayMessages)
            }

            )
            
        } catch (error) {
            
        }
    }


    
    return (
        <ChatContext.Provider value={{user,login,logout,messages}} >
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
