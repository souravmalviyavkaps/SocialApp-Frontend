'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PlusCircleIcon, HomeIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="shadow-sm border-b bg-white top-0 fixed w-full text-black">
      <div className="flex justify-between max-w-6xl bg-gray-50 mx-5 xl:mx-auto p-2">
        <div className="relative w-24 h-8 lg-inline">
          <Image className='' alt="insta-logo" src="/logo.png" width={120} height={10} />
        </div>
      </div>
    </div>
  )
}
