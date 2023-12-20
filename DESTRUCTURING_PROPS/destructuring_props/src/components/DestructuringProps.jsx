const DestructuringProps = ({ brand, model, year, price, vehiclclass, engine }) => {

    return (
        <div>
            <ul className="list"> 
                <li>Marca do carro: {brand}</li>
                <li>Modelo do carro: {model}</li>
                <li>Ano do carro: {year}</li>
                <li>Preço do carro: {price}</li>
                <li>Classe do carro: {vehiclclass}</li>
                <li>Tipo de motor do carro: {engine}</li>
            </ul>
        </div>
    );
};

export default DestructuringProps