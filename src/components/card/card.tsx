import { Bed, HotTub } from '@/icons'
import React from 'react'
import { Square, Star } from 'react-feather'

const Ribbon = () => {
    return (
        <div className="absolute bottom-0 left-0 flex items-center bg-violet-500 font-medium text-white p-3 rounded-lg translate-y-1/2">
            <Star width={12} height={12} fill="#fff" className="block" />
            <p className="text-xs ml-2 leading-[0]">POPULAR</p>
        </div>
    )
}

export const Card = () => {
    return (
        <div className="relative max-w-[350px] rounded-lg overflow-hidden shadow-md shadow-indigo-400/10">
            <div className="relative">
                <Ribbon />
                <img
                    src="https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
            </div>

            <div className="bg-white py-4 px-6">
                <div className="flex items-center pt-4">
                    <p className="text-violet-500 font-semibold text-2xl mr-1">
                        $2,095
                    </p>
                    <span className="text-gray-500">/month</span>
                </div>

                <div className="pt-2 pb-4">
                    <p className="font-semibold text-3xl">Palm Harbor</p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div className="text-violet-900 flex items-center">
                        <Bed small />
                        <span className="text-gray-500 text-sm block ml-2">
                            4 Beds
                        </span>
                    </div>

                    <div className="text-violet-900 flex items-center">
                        <HotTub small />
                        <span className="text-gray-500 text-sm block ml-2">
                            2 Bathrooms
                        </span>
                    </div>

                    <div className="text-violet-900 flex items-center">
                        <Square width={18} height={18} strokeWidth={1.5} />
                        <span className="text-gray-500 text-sm block ml-2">
                            8 x 10 &#13217;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
