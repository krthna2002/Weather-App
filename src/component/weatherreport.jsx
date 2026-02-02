import { useContext } from "react"
import { ArrContext } from "./storeContext"

function WeatherReport() {

    const { storeWeather, setStoreWeather } = useContext(ArrContext)
    console.log(storeWeather)

    function delReport() {
        setStoreWeather(null)
    }

    return (
        storeWeather === null ? <h1></h1> : <div className="flex flex-row justify-between m-3 p-3 rounded-md bg-orange-200">
            <div>
                <h1>Name: <span className="text-green-700 font-semibold">{storeWeather.name}</span></h1>
                <h1>Main: <span className="text-green-700 font-semibold">{storeWeather.weather[0].main}</span></h1>
                <h1>Description: <span className="text-green-700 font-semibold">{storeWeather.weather[0].description}</span></h1>
                <h1>Degree: <span className="text-green-700 font-semibold">{Math.round(storeWeather.main.temp - 273.15)}°C</span></h1>
            </div>
            <div>
                <button className="w-10 h-10 hover:bg-yellow-400 p-2 rounded-full" onClick={delReport}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </button>
            </div>
        </div>

    )
}
export default WeatherReport