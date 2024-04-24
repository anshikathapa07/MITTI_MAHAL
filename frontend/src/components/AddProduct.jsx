import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import '../App.css'

const AddProduct = () => {
  const AddProductForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/product/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Submit successful', { variant: 'success' })
      } else {
        enqueueSnackbar('Submit failed', { variant: 'error' })
      }
    },

  })
  return (
    <div>

      <form onSubmit={AddProductForm.handleSubmit}>
        <div className="product">
          <h1 className=' mb-3 mb-6 ' >Add Product</h1>
          <label className=''>Name</label>
          <input type="text" placeholder='Enter the product name' className='inputBox'
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.name}>
          </input>
          <label>Category</label>
          <input type="text" placeholder='Enter the  category of product ' className='inputBox'
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.category}>
          </input>
          <label>Price</label>
          <input type="text" placeholder='Enter the product price' className='inputBox'
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.price}>
          </input>
          <label>Description</label>
          <input type="text" placeholder='Enter the product description' className='inputBox'
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.description}>
          </input>
          <button type='submit' className=" btn btn-danger mt-5 p-4">Add Product</button>
        </div>
      </form>
    </div>

  )
}

export default AddProduct