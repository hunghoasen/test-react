import Content from './Content';
import { useState, useCallback, useMemo, useRef } from 'react';
import './App.css';

//two way bilding

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const btnName = useRef()

  const handleAdd = () => {
    setProducts([...products, {
      name,
      price: parseInt(price)
    }])
    setName('')
    setPrice('')
    btnName.current.focus();
  }

  console.log("Hello moi nguoi");

  const total = useMemo(() => {
    const results = products.reduce((result, prod) => {
      return result + prod.price
    }, 0)

    return results
  }, [products])

  return (

    <div style={{ padding: "10px 32px" }}>

      <input
        ref={btnName}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
        type="text"
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
        type="text" />
      <br />
      <button
        onClick={handleAdd}
      >Add</button>
      <p>Total price:  {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}

      </ul>

    </div>

  )
}

export default App;
