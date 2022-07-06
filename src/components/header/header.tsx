import Link from 'next/link'
import React from 'react'
import { Home } from 'react-feather'
import { Button } from '../button'
import { Dropdown } from '../dropdown'

import { NavLinks } from './header.const'
interface CommonProps {
    children: React.ReactNode
}

const NavigationLink: React.FC<CommonProps> = ({ children }) => {
    return (
        <li className="font-medium text-gray-700 transition rounded hover:bg-violet-200/50 hover:text-violet-600">
            {children}
        </li>
    )
}

export const Header = () => {
    return (
        <header className="flex items-center px-10 py-4 bg-transparent border-b shadow-sm border-gray-300/50 shadow-violet-400/20">
            <h1 className="text-xl font-semibold">
                <Link href={'/'}>
                    <a className="flex items-center gap-2 px-4 py-2 text-inherit">
                        <Home className=" fill-violet-600 stroke-violet-600" />
                        <span>Estatery</span>
                    </a>
                </Link>
            </h1>

            <nav className="mx-6">
                <ul className="flex items-center">
                    {NavLinks.map((l, i) => (
                        <NavigationLink key={i}>
                            {l.type === 'link' ? (
                                <Link href={l.href}>
                                    <a className="block px-4 py-2">{l.name}</a>
                                </Link>
                            ) : (
                                <Dropdown
                                    className="px-4 py-2"
                                    heading={l.name}
                                />
                            )}
                        </NavigationLink>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-4 ml-auto">
                <Button type="secondary">Login</Button>
                <Button type="primary">Sign Up</Button>
            </div>
        </header>
    )
}
