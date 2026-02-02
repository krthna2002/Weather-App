import { createContext, useState } from "react"

const ArrContext = createContext()
function StoreContext({ children }) {
    // console.log(children)
    const [state, setstate] = useState("")

    const [storeWeather, setStoreWeather] = useState(
        null
    )
    // const [storeWeather,setStoreWeather]=useState(
    // {
    // Id:"",
    // Name:"",
    // Main:"",
    // Temp:"",
    // Description:""
    // }
    // )
    return (
        <ArrContext.Provider value={{ state, setstate, storeWeather, setStoreWeather }}>
            {children}
        </ArrContext.Provider>
    )
}
export default StoreContext
export { ArrContext }