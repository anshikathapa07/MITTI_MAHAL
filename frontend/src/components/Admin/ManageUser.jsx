import { enqueueSnackbar } from 'notistack'
import React,{useState,useEffect} from 'react'

const manageuser = () => {

    const [Data,setData]=useState([])
    const fetchUserData = async()=>{
        const res = await fetch('http://localhost:3000/user/getall',)
        console.log(res.status)
        if(res.status===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(()=>{
        fetchUserData()
    },[])

    const deleteUser = async(id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/user/delete/" +id,{
          method:"DELETE"
        })
        console.log(res.status);
        if(res.status === 200) {
          enqueueSnackbar("user deleted successfully", {variant:"success"})
          fetchUserData();
        }else{
          enqueueSnackbar("something went wrong", {variant:"error"})
        }
      }
    
    const displayUsers =()=>{
        return Data.map((user)=>{
        return<tr>
            <td>{user.firstname}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td><button onClick={e => deleteUser(user._id)} className='btn btn-danger'>Delete</button></td>
           
            </tr>
        })
    }
  return (
    <div className=''>
      <header className='bg-danger mt-5 text-white text-center '>
        <div className='container py-5'>
            <h1>Manage user</h1>
        </div>
      </header>
      <div className="container">
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Password
                    </th>
                </tr>
            </thead>
            <tbody>
                {displayUsers()}
                </tbody>
        </table>
      </div>
    </div>
  )
}

export default manageuser