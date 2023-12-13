import { useState } from 'react'

const HookUsestate = () => {

  const [value, setValue] = useState(0)

  return (
    <div>
      <h2>Clique nos botões abaixo para re-renderizar o valor!</h2>
      <h1 className='valueText'>{value}</h1>
      <button className='changeBtn' onClick={() => setValue(100)}>Alterar valor</button>
      <button className='resetBtn' onClick={() => setValue(0)}>Resetar valor</button>
      
    </div>
  )
}

export default HookUsestate