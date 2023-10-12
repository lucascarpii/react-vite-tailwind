import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = (data)=>{
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail)=>{
    context.closeCheckoutSideMenu()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  
  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
    if(isInCart){
      return(
      <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 text-green-700 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
      </div> 
      )
    }
    return (
    <div 
      className="absolute top-0 right-0 flex justify-center items-center text-black/80 bg-white/50 transition-colors duration-200 rounded-full w-6 h-6 m-2 hover:bg-white "
      onClick={(event) => addProductsToCart(event, data.data)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </div> 
    )
  }

  return (
    <div
      onClick={() => showProduct(data.data)}
      className="bg-white select-none border cursor-pointer w-56 h-60 rounded-lg px-2.5 pt-2.5 transition-all duration-200 hover:bg-gray-50 hover:-translate-y-1">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/90 rounded-full text-white text-xs m-2 px-3 py-0.5 capitalize">{data.data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images?.[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center gap-4">
        <span className="text-sm font-light truncate">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export {Card}