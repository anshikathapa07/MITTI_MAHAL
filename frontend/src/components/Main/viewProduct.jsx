import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCartContext from '../Context/CartContext';


const ViewProduct = () => {
  const { id } = useParams();
  const { isInCart, addItemToCart } = useCartContext();
  const [productList, setproductList] = useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/product/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setproductList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <>
      {
        productList !== null ? (


          <div className="bg-gray-100  py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover "
                      src={'http://localhost:3000/' + productList.image}
                      alt="Product Image"
                    />
                  </div>
           
                </div>
                <div className="md:flex-1 px-4 my-auto">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {productList.name}
                  </h2>
                 
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-black">
                        ₹{productList.price}
                      </span>                    
                    </div>
                  
                    <div>
                      <span className="font-bold text-black">
                        Availability:
                      </span>
                      <span className="text-gray-600 bg-green-800 rounded-2xl px-3 font-serif  dark:text-gray-300">In Stock</span>
                    </div>
                  </div>
           
        
                  <div>
                    <span className="font-bold text-black text-lg">
                      Product Description:
                    </span>
                    <p className="text-gray-800 text-sm mt-2">
                     {productList.description}
                    </p>
                  </div>

                  <div className="w-1/2 px-2">
                      <button disabled={isInCart(productList)} onClick={e => addItemToCart(productList)} className='mt-2 mb-2 bg-green-800   py-1 px-5 rounded-xl text-white  rounded' >
                        {isInCart(productList) ? 'Already Added' : 'Add to Cart'}
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>





        ) : (
          <div>
            Loading
          </div>
        )
      }
    </>


  )
}


export default ViewProduct