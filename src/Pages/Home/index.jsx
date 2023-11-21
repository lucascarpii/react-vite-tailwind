import { useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { NotFoundItems } from "../../NotFoundItems"

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)
  const handleChange = (event) => {
    setSearchByTitle(event.target.value)
  }

  const renderView = () => {
    if(filteredItems?.length > 0){
      return(
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return(<NotFoundItems />)
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border focus:border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={handleChange} />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg relative">
      {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
