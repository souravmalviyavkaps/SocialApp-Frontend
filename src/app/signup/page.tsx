'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { registerUserApi } from '../api_calls'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SignUp() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log('errors', errors)

  const handleFormSubmit = async (data: object) => {
    console.log('data', data)
    const res = await registerUserApi(data)
    if (res.success) {
      toast.success(res.message)
      router.push('/login')
    } else {
      toast.error(res.message)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto h-auto lg:py-0 h-32">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-auto overflow-scroll no-scrollbar">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={e => {
                e.preventDefault()
                handleSubmit(data => handleFormSubmit(data))()
              }}>
              <div>
                <input
                  type="text"
                  {...register('fname', { required: 'First name is required' })}
                  id="fname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                />
              </div>
              <p style={{ color: '#c82929', marginTop: 2, marginLeft: 20 }}>
                {errors.fname && errors.fname?.message?.toString()}
              </p>
              <div>
                <input
                  type="text"
                  {...register('lname', { required: 'Last name is required' })}
                  id="lname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                />
              </div>
              <p style={{ color: '#c82929', marginTop: 2, marginLeft: 20 }}>
                {errors.lname && errors.lname?.message?.toString()}
              </p>
              <div>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter valid email',
                    },
                  })}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <p style={{ color: '#c82929', marginTop: 2, marginLeft: 20 }}>
                {errors.email && errors.email?.message?.toString()}
              </p>
              <div>
                <select
                  {...register('gender', { required: true })}
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Gender"
                  required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  {...register('country', {
                    minLength: {
                      value: 2,
                      message: 'country should contain atleast 2 characters',
                    },
                  })}
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Country"
                />
              </div>
              <div>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Atleast 6 characters required',
                    },
                    maxLength: {
                      value: 24,
                      message: 'Passwords can be maximum 24 characters long',
                    },
                  })}
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="confirm-password"
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required',
                    minLength: {
                      value: 6,
                      message: 'Atleast 6 characters required',
                    },
                    maxLength: {
                      value: 24,
                      message: 'Passwords can be maximum 24 characters long',
                    },
                  })}
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:border">
                Create an account
              </button>

              {/* Social Login options */}
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
                        className="h-5 w-7"
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
                        className="h-5 w-7"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
