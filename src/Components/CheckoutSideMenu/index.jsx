import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  console.log(context.cartProducts)
  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] shadow-lg border flex flex-col fixed rounded-lg bg-white right-0 h-[calc(100vh_-_68px)] top-[68px]`}>
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="font-medium text-xl text-gray-600">My Order</h2>
        <button onClick={()=> context.closeCheckoutSideMenu()} className="p-1 text-gray-500 rounded-lg border hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="px-4 py-4">
      {
        context.cartProducts.map(product => (  
        <OrderCard 
          key={product.id}
          title={product.title}
          imageUrl={product.images?.[0]}
          price={product.price} />
          ))
      }
      </div>
    </aside>
  )
}

export {CheckoutSideMenu}