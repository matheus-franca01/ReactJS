import VehicleDetails from './components/vehicleDetails'

import './App.css'


function App() {

  const cars = [
    { id: 1, brand: "BMW", color: "Azul", year: 2022, newCar: false },
    { id: 2, brand: "Nissan", color: "Cinza", year: 2023, newCar: false },
    { id: 3, brand: "Porsche", color: "Vermelho", year: 2021, newCar: false },
    { id: 4, brand: "Audi", color: "Preto", year: 2024, newCar: true },
  ]


  return (
    <>
      <div className="App">
        {cars.map((car) => (
          <VehicleDetails className="carInfo"
            brand={car.brand}
            color={car.color}
            year={car.year}
            newCar={car.newCar} />
        ))}
      </div>

    </>
  );
};

export default App
