import { useState, useEffect } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"

function Home() {
  const [items, setItems] = useState(null)
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        const first100Items = data.slice(0, 100);
        setItems(first100Items);
    })
}, [])

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
      {
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }
      </div>
    </Layout>
  )
}

export {Home}
