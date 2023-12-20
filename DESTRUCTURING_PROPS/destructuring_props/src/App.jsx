import DestructuringProps from './components/DestructuringProps'
import './App.css'

function App() {

  return (
    <>

      <div className="App">
        <p><b>Destructuring props</b></p>
        <h2 className="main-txt">Detalhes do veículo</h2>
        <img className="car-img" src="/Rimac-Nevera.png" alt="Carro Rimac Nevera" />
        <DestructuringProps brand="Rimac" model="Nevera" year={2023} price={25000000} vehiclclass="Esportivo de Luxo" engine="Motor elétrico" />
      </div>

    </>
  );
};

export default App
