import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataBase() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://localhost:8080');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>
          {item.name}
          
        </div>
      ))}
    </div>
  );
}

export default DataBase;
