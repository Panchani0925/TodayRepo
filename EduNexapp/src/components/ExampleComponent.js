import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiService';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData('users'); // Replace with your backend endpoint
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
