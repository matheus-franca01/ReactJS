const VehicleDetails = ({ brand, color, year, newCar }) => {
    return (
        <div>
            <h2>Detalhes do veículo:</h2>

            <ul>
                <li>Marca do veículo: {brand}</li>
                <li>Cor do veículo: {color}</li>
                <li>Ano do veículo: {year}</li>
            </ul>

            {/*Condicional para exibir uma mensagem caso o veículo seja novo*/}
            {newCar && <p>Este veículo é novo!</p>}

        </div>
    );
};

export default VehicleDetails