import React, {useState, useEffect} from 'react'

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const [masterList, setMasterList] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/product/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setProducts(data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    const displayProducts = () =>{
        return products.map((item) => (
           
                <div className="col-md-4">
                    <div className="card rounded shadow p-4 mb-4 ">
                    <img src={"http://localhost:5000/" + item.image} className='card-img-top img-fluid' alt="loading" />
                    <div className="card-body">
                        <h4 style={{fontFamily:"serif"}}>{item.name}</h4>
                        <p className="">{item.category}</p>
                        <p className="text-secondary">${item.price}</p>
                        <p className="">{item.description}</p>
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
        <header className='bg-body-tertiary' style={{ backgroundColor:'sandybrown' }}>
            <div className="container py-5">
                <p className='text-center fw-bold ' style={{fontSize:"35px" , fontFamily:"initial"}}>All Products</p>
                <input type='text' placeholder='Search Products' className='form-control w-75 m-auto' />
            </div>
        </header>

        <div className="container mt-5">
            <div className="row mt-5 p-5">
                {displayProducts()}
            </div>
        </div>
    </div>
  )
}

export default ProductListing