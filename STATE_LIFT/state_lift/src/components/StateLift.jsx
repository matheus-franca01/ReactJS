const StateLift = ( {user} ) => {
  return (
    <div>
        <h2>Selecione um número para verificar o usuário:</h2>
        <p>{user}</p>
    </div>
  );
};

export default StateLift 