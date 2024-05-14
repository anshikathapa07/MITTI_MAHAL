import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([])
  const [masterList, setMasterList] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:3000/product/getall')
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      setProducts(data)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, []);

  const displayProducts = () => {
    return products.map((item) => (

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <img
          className="w-full h-64 bg-white-300 bg-center bg-cover rounded-lg shadow-md"
          src={'http://localhost:3000/' + item.image}
        />
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-white-800">
          <h3 className="py-1 font-bold tracking-wide text-center text-black-800 uppercase dark:text-black">
            {item.name}
          </h3>
          <p className="text-center mb-2 text-black">
            {item.category}

          </p>
          <div className="flex items-center justify-between px-3 py-2 -bg-black-200 dark:bg-white-700">
            <span className="font-bold text-black-800 dark:text-black-200">{item.price}</span>
            <Link to={`/Main/viewProduct/${item._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              View Product
            </Link>
          </div>
        </div>
      </div>

    ))
  }

  const applysearch = (e) => {
    const inputText = e.target.value;

    setProducts(masterList.filter((product) => {
      return product.category.toLowerCase().includes(inputText.topLowerCase());
    }));


  }
  return (
    <div>
      <header className='bg-body-tertiary' style={{ backgroundImage: "url(https://wallpapers.com/images/high/light-brown-background-ze8u67khwccsklg3.webp)", backgroundSize: "cover" }}>
      
        
        <div className="container py-5">
          
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-lg font-medium text-dark-900 sr-only dark:text-black"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-black-500 dark:text-black-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-black-300 rounded-lg bg-white-50 focus:ring-black-500 focus:border-black-500 dark:border-black-600 dark:placeholder-black-400 dark:text-black "
                placeholder="Search Mockups, Logos..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

        </div>
      </header>

      <div className="container mt-5">
        <div className="grid grid-cols-4 gap-6">
          {displayProducts()}
        </div>
      </div>
    </div>
  )
}

export default ProductListing