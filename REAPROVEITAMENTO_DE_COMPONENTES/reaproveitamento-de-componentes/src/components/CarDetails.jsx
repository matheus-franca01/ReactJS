const CarDetails = ({brand, model, year, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do veículo:</h2>

        <ul className="carList">
            <li>Marca do veículo: {brand}</li>
            <li>Modelo do veículo: {model}</li>
            <li>Ano do veículo: {year}</li>
            <li>Cor do veículo: {color}</li>
        </ul>

        {newCar && <p className="NewCar">Este veículo é novo!</p>}
    </div>
  )
}

export default CarDetails