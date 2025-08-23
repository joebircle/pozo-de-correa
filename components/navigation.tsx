"use client"

import Link from "next/link"
;<nav className="bg-white shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
        <div>
          <a href="/" className="flex items-center py-4 px-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-gray-500 text-lg">BrandName</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#inicio" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Nosotros
          </Link>
          <Link href="/history" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Historia
          </Link>
          <Link href="/accommodations" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Alojamiento
          </Link>
          <Link href="/activities" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Actividades
          </Link>
          <Link href="/dining" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Gastronomía
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Galería
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#a08076] transition-colors font-medium">
            Contacto
          </Link>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg className=" w-6 h-6 text-gray-500 hover:text-[#a08076]" x-show="!showMenu" onClick="showMenu = true;">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            ></path>
          </svg>
          <svg className=" w-6 h-6 text-gray-500 hover:text-[#a08076]" x-show="showMenu" onClick="showMenu = false;">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4.293 4.293 4.293 4.293a1 1 0 01-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className="mobile-menu hidden md:hidden">
    <ul className="flex flex-col md:flex-row list-none md:space-x-8 items-center md:justify-between mt-4 md:mt-0">
      <Link href="/#inicio" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Inicio
      </Link>
      <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Nosotros
      </Link>
      <Link href="/history" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Historia
      </Link>
      <Link href="/accommodations" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Alojamiento
      </Link>
      <Link href="/activities" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Actividades
      </Link>
      <Link href="/dining" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Gastronomía
      </Link>
      <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Galería
      </Link>
      <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#a08076] transition-colors">
        Contacto
      </Link>
    </ul>
  </div>
</nav>
