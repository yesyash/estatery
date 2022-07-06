import { Bed, HotTub } from '@/icons'
import React from 'react'
import { Square, Star } from 'react-feather'

const Ribbon = () => {
    return (
        <div className="absolute bottom-0 left-0 flex items-center p-3 font-medium text-white translate-y-1/2 rounded-tr-lg rounded-br-lg bg-violet-500">
            <Star width={12} height={12} fill="#fff" className="block" />
            <p className="text-xs ml-2 leading-[0]">POPULAR</p>
        </div>
    )
}

export const Card = () => {
    return (
        <div className="relative min-w-[350px] max-w-[450px] rounded-lg overflow-hidden shadow-md shadow-violet-400/10">
            <div className="relative">
                <Ribbon />
                <img
                    src="https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
            </div>

            <div className="px-6 py-4 bg-white">
                <div className="flex items-center pt-4">
                    <p className="mr-1 text-2xl font-semibold text-violet-500">
                        $2,095
                    </p>
                    <span className="text-gray-500">/month</span>
                </div>

                <div className="pt-2 pb-4">
                    <p className="text-3xl font-semibold">Palm Harbor</p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div className="flex items-center text-violet-900">
                        <Bed small />
                        <span className="block ml-2 text-sm text-gray-500">
                            4 Beds
                        </span>
                    </div>

                    <div className="flex items-center text-violet-900">
                        <HotTub small />
                        <span className="block ml-2 text-sm text-gray-500">
                            2 Bathrooms
                        </span>
                    </div>

                    <div className="flex items-center text-violet-900">
                        <Square width={18} height={18} strokeWidth={1.5} />
                        <span className="block ml-2 text-sm text-gray-500">
                            8 x 10 &#13217;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}