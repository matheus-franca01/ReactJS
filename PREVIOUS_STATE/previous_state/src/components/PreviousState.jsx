import { useState } from 'react'

const PreviousState = () => {

    const [users, setUsers] = useState([
        {id: 1, nome: "Matheus", idade: 23, profissao: "Designer"},
        {id: 2, nome: "Renata", idade: 41, profissao: "Redatora"},
        {id: 3, nome: "Jarbas", idade: 40, profissao: "Desenvolvedor"},
        {id: 4, nome: "Kelly", idade: 33, profissao: "Redatora"},
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random () * 5 );

        console.log(randomNumber)

        setUsers ((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !==user.id)
        });
    };
    
    return (
        <div>
            <ul>
                {users.map((user) => (
                   <li key={user.id}>
                   Nome: {user.nome} | Idade: {user.idade} | Profissão: {user.profissao}
                </li> 
                ))}
            </ul>

            <button onClick={deleteRandom}>Remover um usuário</button>

            
        </div>
    );
};

export default PreviousState