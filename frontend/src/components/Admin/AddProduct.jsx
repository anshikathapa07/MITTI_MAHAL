import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const AddProduct = () => {
  const [selFile, setSelFile] = useState([])
  const AddProductForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: '',
      description: '',
      image: '',
    },
    onSubmit: async (values, action) => {
      values.image = selFile
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
    }
  })

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:3000/util/uploadfile', {
      method: 'POST',
      body: fd
    })
    console.log(res.status);
  }

  return (
    <section className="bg-white dark:bg-gray-900 " style={{ opacity: ".8", backgroundImage: "url(https://img.freepik.com/free-photo/monochromatic-still-life-composition-with-tableware_23-2148869761.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h1 className="mb-4 text-3xl font-bold text-dark-900 dark:text-dark">
          Add a new product
        </h1>
        <form onSubmit={AddProductForm.handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-dark-900 dark:text-dark"
              >
                Product Name
              </label><span style={{ color: 'red', fontSize: '10' }}>{AddProductForm.touched.name && AddProductForm.errors.name}</span>
              <input
                type="text"
                name="name"
                id="name"
                onChange={AddProductForm.handleChange}
                value={AddProductForm.values.name}
                className="bg-white border border-gray-300 text-dark-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-400 dark:text- darkdark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-dark-900 dark:text-dark"
              >
                Image
              </label><span style={{ color: 'red', fontSize: '10' }}>{AddProductForm.touched.name && AddProductForm.errors.name}</span>
              <input
                type="file"
                id="image"
                onChange={uploadFile}
                className="bg-white border border-gray-300 text-dark-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-400 dark:text- darkdark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-lg font-medium text-dark-900 dark:text-black"
              >
                Price
              </label><span style={{ color: 'red', fontSize: '10' }}>{AddProductForm.touched.price && AddProductForm.errors.price}</span>
              <input
                type="number"
                name="price"
                id="price"
                onChange={AddProductForm.handleChange}
                value={AddProductForm.values.price}
                className="bg-white border border-gray-300 text-dark-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-lg font-medium text-dark-900 dark:text-black"
              >
                Category
              </label><span style={{ color: 'red', fontSize: '10' }}>{AddProductForm.touched.category && AddProductForm.errors.category}</span>
              <select
                id="category"
                onChange={AddProductForm.handleChange}
                value={AddProductForm.values.category}
                className="bg-white border border-dark-300 text-dark-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3.5 dark:bg-dark-700 dark:border-black-600 dark:placeholder-dark-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Select category</option>
                <option value="showpieces">Showpieces</option>
                {/* <option value="decorative item">Decorative item</option> */}
                <option value="utensils">Utensils</option>
                <option value="Watercontainers">Water Containers</option>
              </select>
            </div>
            <div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-lg font-medium text-dark-900 dark:text-black"
              >
                Description
              </label><span style={{ color: 'red', fontSize: '10' }}>{AddProductForm.touched.description && AddProductForm.errors.description}</span>
              <textarea
                id="description"
                onChange={AddProductForm.handleChange}
                value={AddProductForm.values.description}
                rows={8}
                className="block p-2.5 w-full text-lg text-dark-900 bg-white rounded-lg border border-dark-300 focus:ring-primary-500 focus:border-primary-500  dark:border-dark-600  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"

              />
            </div>
          </div>

          <button
            type="submit"
            className=" w-full focus:outline-none text-white bg-black hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 mt-4 mb-2 dark:focus:ring-red-900"
          > Add product</button>
        </form>
      </div>
    </section>
  )

}
export default AddProduct