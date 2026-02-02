import ShowWeather from "./component/showWeather"
// import weatherimg from "./assets/weather.jpg"
import weatherimg from "./assets/weather2.jpg"
import StoreContext from "./component/storeContext"
import WeatherReport from "./component/weatherreport"
function App() {
  return (
    <>
      <StoreContext>

        <div className="bg-cover bg-no-repeat h-screen w-screen flex flex-col items-center  justify-center"
          style={{ backgroundImage: `url(${weatherimg})` }}>
          <div className="bg-white/70 p-5 rounded-md inset-0">
            <div className="z-10 flex flex-col gap-3">
              <div className="text-center">
                <h1 className="text-blue-500 text-2xl font-normal">Weather Report</h1>
                <p>I Can give you a weather report about your city...!</p>
              </div>
              <ShowWeather />
              <WeatherReport />
            </div>

          </div>

        </div>
      </StoreContext>
    </>
  )
}
export default App