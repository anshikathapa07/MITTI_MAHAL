import { enqueueSnackbar } from 'notistack'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const ManageProduct = () => {

  const [Data,setData]=useState([])

    const fetchProductData = async()=>{
        const res = await fetch('http://localhost:3000/product/getall',)
        console.log(res.status)
        if(res.status===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(()=>{
        fetchProductData()
    },[])

    const deleteProduct = async(id) => {
      console.log(id);
      const res = await fetch("http://localhost:3000/product/delete/" +id,{
        method:"DELETE"
      })
      console.log(res.status);
      if(res.status === 200) {
        enqueueSnackbar("product deleted successfully", {variant:"success"})
        fetchProductData();
      }else{
        enqueueSnackbar("something went wrong", {variant:"error"})
      }
    }
    
    const displayProducts =()=>{
        return Data.map((product)=>{
            <tr>
            <td>
              <img src={"http://localhost:3000/" + product.image} alt="" style={{height:40}} />
            </td>
           
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><button onClick={e => deleteProduct(product._id)} className='btn btn-danger'>Delete</button></td>
            {/* <td><Link to={/admin/updateproduct/${product._id}} className='btn btn-danger'>Update</Link></td> */}
            </tr>
        })
    }
  return (
    <div className=''>
     <header className='bg-danger mt-5 text-white text-center '>
        <div className='container py-5'>
            <h1>Manage product</h1>
        </div>
      </header>
      <div className="container">
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {displayProducts()}
                </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageProduct