import React, { useEffect, useState } from 'react';

function DataSave() {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem('data');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Função para adicionar um novo item aos dados
  const addItem = item => {
    setData([...data, item]);
  };

  // Função para remover um item dos dados
  const removeItem = item => {
    setData(data.filter(i => i !== item));
  };

  return (
    <div>
      <h1>Meus Dados</h1>
      {data.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => removeItem(item)}>Remover</button>
        </div>
      ))}
      <input type="text" id="newItem" />
      <button onClick={() => addItem(document.getElementById('newItem').value)}>Adicionar</button>
    </div>
  );
}

export default DataSave;
