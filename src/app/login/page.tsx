'use client'

import Link from 'next/link'
import { useState } from 'react'
import { loginUserApi } from '../api_calls'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    console.log('FormData : ', formData)
    const res = await loginUserApi(formData)
  }

  return (
    <>
      {/* component */}
      <section className="flex flex-col md:flex-row h-screen overflow-scroll no-scrollbar items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen overflow-auto no-scrollbar">
          <img
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDRrJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
  flex items-center justify-center h-screen overflow-auto no-scrollbar">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-500">
              Log in to your account
            </h1>
            <form className="mt-6" action="#" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={formData.email}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500 focus:outline-none"
                  autoComplete=""
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={formData.password}
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500
           focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6">
                Log In
              </button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                      alt=""
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-600">
              Need an account?{' '}
              <Link
                href="/users/signup"
                className="text-blue-500 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
