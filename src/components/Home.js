import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Footer from './Footer';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <Hero />
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
