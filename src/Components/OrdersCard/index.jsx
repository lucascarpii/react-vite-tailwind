const OrdersCard = props => {
  const {totalPrice, totalProducts} = props;
  return (
    <div className="flex justify-between items-center mb-4 border rounded-lg w-80 p-4 text-neutral-400">
      <p className="flex justify-between items-center w-full text-neutral-800">
        <div className="flex flex-col">
          <span>01.02.2023</span>
          <span>{totalProducts} articles</span>
        </div>
        <span className="text-xl font-medium">${totalPrice}</span>
      </p>  
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  )
}
export {OrdersCard}