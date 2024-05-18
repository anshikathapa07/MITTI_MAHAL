import { enqueueSnackbar } from 'notistack'
import React, { useState, useEffect } from 'react'

const ManageUser = () => {

  const [Data, setData] = useState([])
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/user/getall',)
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json()
      console.log(data)
      setData(data)
    }
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:3000/user/delete/" + id, {
      method: "DELETE"
    })
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar("user deleted successfully", { variant: "success" })
      fetchUserData();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" })
    }
  }

  const displayUsers = () => {
    return Data.map((user) => {
      return <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td><button
          type="submit"
          className="focus:outline-none text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900" onClick={() => deleteUser(user._id)}
        >
          Delete
        </button>
        
        </td>

      </tr>
    })
  }
  return (
    <div>
      <div className="bg-white text-white">
        <div className="container-10 py-5 align-item-center text-center font-semibold font-serif" style={{ backgroundColor:"sandybrown", color: 'black' }}>
          <h1 style={{ color: 'black' }}> Manage Users</h1>
        </div>
      </div>

      <div className="container-10 mt-5" style={{ backgroundColor: 'white', color: 'black' }}>


        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Password
              </th>
            </tr>
          </thead>
          <tbody>{displayUsers()}</tbody>
        </table>
      </div>
    </div>

  )
}

export default ManageUser