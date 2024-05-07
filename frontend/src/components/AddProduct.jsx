import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import '../App.css'

const AddProduct = () => {
  const AddProductForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: '',
      description:'',
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
          <div className='card bg-white justify-content-center '>
          <div className="row justify-content-md-center h-80">
          <div className=" col-md-6 col-lg-5  col-xl-6">
            <h1 className=' mb-3 mb-6 '>Add Product</h1>
          <label className=''>Name  <span className="text-danger">{AddProductForm.touched.name && AddProductForm.errors.name}</span></label>
          <input type="text" placeholder='Enter the product name' className='inputBox'
           id="name"
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.name}>
          </input>
          <label>Category <span className="text-danger">{AddProductForm.touched.category && AddProductForm.errors.category}</span></label>
          <input type="text" placeholder='Enter the  category of product ' className='inputBox'
          id="category"
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.category}>
          </input>
          <label>Price <span className="text-danger">{AddProductForm.touched.price && AddProductForm.errors.price}</span></label>
          <input type="text" placeholder='Enter the product price' className='inputBox'
          id="price"
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.price}>
          </input>
          <label>Description <span className="text-danger">{AddProductForm.touched.description && AddProductForm.errors.description}</span></label>
          <input type="text" placeholder='Enter the product description' className='inputBox'
          id="description"
            onChange={AddProductForm.handleChange}
            value={AddProductForm.values.description}>
          </input>
          <button type='submit' className=" btn btn-danger btn-block btn-lg text-block mt-3 p-4">Add Product</button>
        </div>
      </div>
      </div>
      </div>
    </form>
    </div>

  )
}

export default AddProduct