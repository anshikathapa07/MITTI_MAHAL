import { enqueueSnackbar } from 'notistack'
import React, { useState, useEffect } from 'react'

const ManagerContact = () => {

  const [Data, setData] = useState([])
  const fetchContactData = async () => {
    const res = await fetch('http://localhost:3000/contact/getall',)
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json()
      console.log(data)
      setData(data)
    }
  }
  useEffect(() => {
    fetchContactData()
  }, [])

  const deleteContact = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:3000/contact/delete/" + id, {
      method: "DELETE"
    })
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar("contact deleted successfully", { variant: "success" })
      fetchContactData();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" })
    }
  }

  const displayContacts = () => {
    return Data.map((contact) => {
      return <tr>
        <td>{contact.fullname}</td>
        <td>{contact.email}</td>
        <td>{contact.message}</td>
        <td><button
          type="submit"
          className="focus:outline-none text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900" onClick={() => deleteContact(contact._id)}
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
          <h1 style={{ color: 'black' }}> Manage Contact</h1>
        </div>
      </div>

      <div className="container-10 mt-5" style={{ backgroundColor: 'white', color: 'black' }}>


        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                FullName
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
               Message
              </th>
            </tr>
          </thead>
          <tbody>{displayContacts()}</tbody>
        </table>
      </div>
    </div>

  )
}

export default ManagerContact