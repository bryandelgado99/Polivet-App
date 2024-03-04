import { createContext, useState} from "react"

const TratamientosContext = createContext()

const TratamientosProvider = ({ children }) => {
    const [modal, setModal] = useState(false)


    const handleModal = () => {
        setModal(!modal);
    };
    
    return (
        <TratamientosContext.Provider value={
            {
                modal,
                setModal,
                handleModal   
            }
        }>
            {children}
        </TratamientosContext.Provider>
    )
}
export {
    TratamientosProvider
}
export default TratamientosContext