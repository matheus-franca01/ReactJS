import { useState } from 'react'

const KeyProperty = () => {

    const [users] = useState([
        {id: 1, nome: "Matheus", available: false, age: 23},
        {id: 5, nome: "Renata", available: true, age: 41},
        {id: 40, nome: "Jarbas", available: true, age: 43},
    ])

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.nome} = {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default KeyProperty