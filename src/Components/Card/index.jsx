import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = (data)=>{
  const context = useContext(ShoppingCartContext)
  return (
    <div
      onClick={()=> context.openProductDetail()}
      className="bg-white shadow-lg cursor-pointer w-56 h-60 rounded-lg px-2 pt-2 transition-all duration-200 hover:-translate-y-2">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/90 rounded-full text-white text-xs m-2 px-3 py-0.5 capitalize">{data.data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images[2]} alt={data.data.title} />
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 hover:text-green-700 "
          onClick={() => context.setCount(context.count + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        </div> 
      </figure>
      <p className="flex justify-between items-center gap-4">
        <span className="text-sm font-light truncate">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export {Card}