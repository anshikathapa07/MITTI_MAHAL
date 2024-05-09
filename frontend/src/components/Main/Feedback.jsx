import React from 'react'

const Feedback = () => {
  return (
    <div><div className="min-h-screen bg-white-800 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="text-black relative px-4 py-10 bg-orange-200 shadow-lg sm:rounded-3xl sm:p-20">
        <div className="text-center pb-6">
          <h1 className="text-3xl">Feedback</h1>
          <p className="text-blue-700 mt-2">
            We love to hear your throughts,concerns and problem with anything so we can improve!
          </p>
        </div>
        <form action="https://fabform.io/f/{form-id}" method="post">
          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
          />
          
          <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Do you satisfy with our product& services"
            name=""
            
          />
          <textarea
            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type your suggestions here..."
            name="message"
            style={{ height: 121 }}
            defaultValue={""}
          />
          <div className="flex justify-between">
            <input
              className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              defaultValue="Send ➤"
            />
            <input
              className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reset"
            />
          </div>
        
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Feedback