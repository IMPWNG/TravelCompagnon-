import React from 'react'

export default function List() {
    return (
        <div className="bg-black text-white flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <p>
                    test
                </p>
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24">
                <p>
                    test
                </p>
                <p>
                    test
                </p>
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24 fixed bottom-0">
                <p>
                    test
                </p>
            </div>
        </div>
    )
}
