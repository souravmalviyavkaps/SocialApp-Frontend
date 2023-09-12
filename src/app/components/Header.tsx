'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Training App
            </span>
          </Link>
          <div className="flex items-center">
            {!pathname.includes('/admin') && (
              <>
                <Link
                  href="/login"
                  className="text-md text-blue-600 dark:text-blue-500 hover:underline">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-md mx-5 text-blue-600 dark:text-blue-500 hover:underline">
                  SignUp
                </Link>
              </>
            )}
            <div
              className="relative"
              data-te-dropdown-ref=""
              data-te-dropdown-alignment="end">
              {/* Second dropdown trigger */}
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false">
                {/* User avatar */}
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 mb-2">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline">
                  Support
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
