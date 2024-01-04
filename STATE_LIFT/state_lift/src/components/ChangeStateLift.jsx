const ChangeStateLift = ({ handleUser }) => {
    const names = ["Matheus", "João", "Thiago", "Lucas"]
    return (
        <div>
            <button className="select-btn" onClick={() => handleUser(names[0])}>1</button>
            <button className="select-btn" onClick={() => handleUser(names[1])}>2</button>
            <button className="select-btn" onClick={() => handleUser(names[2])}>3</button>
            <button className="select-btn" onClick={() => handleUser(names[3])}>4</button>
            <button className="clear-btn" onClick={() => handleUser()}>Limpar campo</button>
        </div>
    );
};

export default ChangeStateLift 