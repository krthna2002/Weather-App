import { useContext } from "react"
import { ArrContext } from "./storeContext"

function ShowWeather() {
    const { state, setstate, setStoreWeather } = useContext(ArrContext)
    const appId = "bbc700bbfece8e87a6feecc10e9e48c0"
    function handleChange() {
        console.log(state + " CITY NAME IN STATE")

        getdata()
        setstate("")
    }
    async function getdata() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${appId}`)
            if (!response.ok) {
                throw new Error("ERROR")
            }
            const data = await response.json()
            console.log(response + " response")
            console.log(data)
            setStoreWeather(
                data
            )
        }

        catch (error) {
            console.log("ERROR:", error)
        }
        // console.log(storeWeather.Name+" store name") 


    }

    return (
        <div className="flex gap-5">
            <input type="text" value={state} onChange={(e) => setstate((e.target.value).toUpperCase())} placeholder="Enter the place" className="p-2 rounded-md w-full outline-none focus:outline-blue-600"></input>
            <button className=" bg-blue-600 p-1 rounded-md font-semibold" onClick={handleChange}>CLICK</button>
        </div>
    )
}
export default ShowWeather


//     setStoreWeather(
//     null
// )
// Id:"",
// Name:"",
// Main:"",
// Temp:"",
// Description:""


//  console.log(storeWeather.Description+" storeweather123")
// console.log(storeWeather.Name +" store name")
// console.log(storeWeather.Id +" store name")



// {
//     // Id:data.weather[0].id,
//     Name:data.name,
//     Main:data.weather[0].main,
//     Temp:Math.round(data.main.temp-273.15),
//     Description:data.weather[0].description
// }