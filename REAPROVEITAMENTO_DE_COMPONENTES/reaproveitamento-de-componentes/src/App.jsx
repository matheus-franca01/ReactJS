import CarDetails from './components/CarDetails'
import './App.css'

function App() {

  return (
    <>

      <div className="App">
        <p><b>Reaproveitamento de Componentes</b></p>

        <CarDetails brand="Wolkswagen" model="Golf GTI" year={2024} color="Branco" newCar={true}/>
        <CarDetails brand="Renault" model="Clio" year={2020} color="Preto" newCar={false}/>
        <CarDetails brand="Nissan" model="Kicks" year={2022} color="Azul" newCar={false}/>
      </div>

    </>
  )
}

export default App
