import { useState } from 'react'
import './App.css'
import Card from './Card'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  // Descomenta este arreglo para el reto
  const products = [
    {
      id: 1,
      title: "Smartphone XYZ",
      paragraph: "Un teléfono inteligente de última generación con cámara de alta resolución y batería de larga duración.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?q=80&w=500&auto=format&fit=crop",
      productRef: "https://example.com/product/1"
    },
    {
      id: 2,
      title: "Laptop Pro",
      paragraph: "Una laptop potente para profesionales y gamers, con procesador rápido y gráficos increíbles.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
      productRef: "https://example.com/product/2"
    },
    {
      id: 3,
      title: "Smartwatch Elite",
      paragraph: "Monitorea tu actividad física y recibe notificaciones con este elegante reloj inteligente.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
      productRef: "https://example.com/product/3"
    },
    {
      id: 4,
      title: "Auriculares Wireless",
      paragraph: "Disfruta de tu música favorita con estos auriculares inalámbricos de alta calidad.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500&auto=format&fit=crop",
      productRef: "https://example.com/product/4"
    }
  ];

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Productos</h1>
        
        {/* Solución del reto - map de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <Card 
              key={product.id}
              title={product.title}
              paragraph={product.paragraph}
              image={product.image}
              productRef={product.productRef}
            />
          ))}
        </div>
        

      </div>
    </>
  )
}

export default App