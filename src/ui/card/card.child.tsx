import { Star } from 'react-feather'

/*
    A sub-components used exclusively by
    Card components (or other components in
    this directory).
  */

export const Ribbon = () => {
    return (
        <div className="absolute bottom-0 left-0 z-10 flex items-center p-3 font-medium text-white translate-y-1/2 rounded-tr-lg rounded-br-lg bg-violet-500">
            <Star width={12} height={12} fill="#fff" className="block" />
            <p className="text-xs ml-2 leading-[0]">POPULAR</p>
        </div>
    )
}
