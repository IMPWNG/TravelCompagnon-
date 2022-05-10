import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="container-fluid">
                        <a className="text-xl text-black font-semibold" href="#">TravelCompagnon</a>
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
