import { BlurImage } from '@/components/blur-image'
import { Bed, HotTub } from '@/icons'
import React from 'react'
import { Square, Star } from 'react-feather'

interface Props {
    img: string
    name: string
    price: number
    address: string
    beds: number
    bathrooms: number
    area: { length: number; width: number }
}
const Ribbon = () => {
    return (
        <div className="absolute bottom-0 left-0 z-10 flex items-center p-3 font-medium text-white translate-y-1/2 rounded-tr-lg rounded-br-lg bg-violet-500">
            <Star width={12} height={12} fill="#fff" className="block" />
            <p className="text-xs ml-2 leading-[0]">POPULAR</p>
        </div>
    )
}

export const Card: React.FC<Props> = (props) => {
    return (
        <div className="relative min-w-[350px] max-w-[450px] rounded-lg overflow-hidden shadow-md shadow-violet-400/10">
            <div className="relative h-72">
                <Ribbon />
                <BlurImage alt={props.name} url={props.img} />
            </div>

            <div className="px-6 py-4 bg-white">
                <div className="flex items-center pt-4">
                    <p className="mr-1 text-2xl font-semibold text-violet-500">
                        ${props.price}
                    </p>
                    <span className="text-gray-500">/month</span>
                </div>

                <div className="pt-2 pb-4">
                    <p className="mb-2 text-2xl font-semibold capitalize">
                        {props.name}
                    </p>
                    <p className="text-sm text-gray-500">{props.address}</p>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div className="flex items-center text-violet-900">
                        <Bed small />
                        <span className="block ml-2 text-sm text-gray-500">
                            {props.beds} Beds
                        </span>
                    </div>

                    <div className="flex items-center text-violet-900">
                        <HotTub small />
                        <span className="block ml-2 text-sm text-gray-500">
                            {props.bathrooms} Bathrooms
                        </span>
                    </div>

                    <div className="flex items-center text-violet-900">
                        <Square width={18} height={18} strokeWidth={1.5} />
                        <span className="block ml-2 text-sm text-gray-500">
                            {props.area.width} x {props.area.length} &#13217;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
