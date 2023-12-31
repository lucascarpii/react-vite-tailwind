import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"
import { totalPrice } from "../../utils"
import { Link } from "react-router-dom"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }
  
  const handleCheckout = () =>{
    const orderToAdd = {
      date: '01.02.2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] shadow-lg border border-r-0 flex flex-col fixed rounded-s-lg bg-white right-0 h-[calc(100vh_-_68px)] top-[68px]`}>
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="font-medium text-xl text-black">My Order</h2>
        <button onClick={()=> context.closeCheckoutSideMenu()} className="p-1 text-neutral-500 rounded-lg border hover:bg-neutral-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="px-4 py-4 overflow-y-auto">
      {
        context.cartProducts.map(product => (  
        <OrderCard 
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.images?.[0]}
          price={product.price}
          handleDelete={handleDelete}
          />
          ))
      }
      </div>
      <div className="p-4 mt-auto border-t">
        <p className="flex justify-between items-center">
          <span className="text-md font-light">Total:</span>
          <span className="text-xl font-semibold">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button 
            onClick={()=>handleCheckout()}
            className="bg-black px-4 py-2 w-full mt-2 font-medium text-md rounded-lg text-white">Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export {CheckoutSideMenu}