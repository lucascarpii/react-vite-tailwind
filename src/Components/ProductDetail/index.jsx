const ProductDetail = () => {
  return (
    <aside className="w-[360px] border flex flex-col fixed rounded-lg bg-white right-0 h-[calc(100vh_-_68px)] top-[68px]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl text-gray-600">Detail</h2>
        <button className="p-1 text-gray-500 rounded-lg border hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  )
}

export {ProductDetail}