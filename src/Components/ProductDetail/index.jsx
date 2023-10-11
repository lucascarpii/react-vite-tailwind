import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log('product to show', context.productToShow)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] shadow-lg border flex flex-col fixed rounded-lg bg-white right-0 h-[calc(100vh_-_68px)] top-[68px]`}>
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="font-medium text-xl text-gray-600">Detail</h2>
        <button onClick={()=> context.closeProductDetail()} className="p-1 text-gray-500 rounded-lg border hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <figure className="px-6 mt-6">
        <img 
          className="w-full h-full rounded-lg" 
          src={context.productToShow.images[0]} 
          alt={context.productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail}