import { enqueueSnackbar } from 'notistack'
import React, { useState, useEffect } from 'react'

const ManageProduct = () => {

  const [Data, setData] = useState([])

  const fetchProductData = async () => {
    const res = await fetch('http://localhost:3000/product/getall',)
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json()
      console.log(data)
      setData(data)
    }
  }
  useEffect(() => {
    fetchProductData()
  }, [])

  const deleteProduct = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:3000/product/delete/" + id, {
      method: "DELETE"
    })
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar("product deleted successfully", { variant: "success" })
      fetchProductData();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" })
    }
  }

  const displayProducts = () => {
    return Data.map((product) => {
    return  <tr>
        <td>
          <img src={"http://localhost:3000/" + product.image} alt="" style={{ height: 40 }} />
        </td>

        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td><button
          type="submit"
          className="focus:outline-none text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900" onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
          <button
            type="submit"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            update
          </button>
        </td>

      </tr>
    })
  }
  return (
      <div>
      <div className="bg-white text-black">
        <div className="container-10 py-5 align-item-center text-center font-semibold font-serif" style={{ backgroundColor: "sandybrown", color: 'black' }}>
          <h1 style={{ color: 'black' }}> Manage Product</h1>
        </div>
      </div>

      <div className="container-10 mt-5" style={{ backgroundColor: 'white', color: 'black' }}>


        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Image
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>{displayProducts()}</tbody>
        </table>
      </div>
    </div>

  )
}

export default ManageProduct
