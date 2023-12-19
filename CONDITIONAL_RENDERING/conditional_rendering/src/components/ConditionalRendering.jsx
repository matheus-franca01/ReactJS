import { useState } from 'react'

const ConditionalRendering = () => {

    const [user, setUser] = useState()

    return (
        <div>
            <h2>{user}</h2>
            <p>{user === "Matheus" ? "Você está logado e possui permissões de Administrador nesta Página." : "Você não está logado na Página."}</p>
            <button className="login-btn" onClick={() => setUser("Matheus")}>Fazer login</button>
            <button className="logoff-btn" onClick={() => setUser()}>Sair</button>
            <p></p>
        </div>
    );
};

export default ConditionalRendering