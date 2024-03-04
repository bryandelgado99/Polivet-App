import { createContext, useState} from "react"

const TratamientosContext = createContext()

const TratamientosProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [tratamientos, setTratamientos] = useState([])


    const handleModal = () => {
        setModal(!modal);
    };
    
    return (
        <TratamientosContext.Provider value={
            {
                modal,
                setModal,
                handleModal,
                tratamientos,
                setTratamientos   
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