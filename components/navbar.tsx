"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Menu } from 'lucide-react';

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const [active, setActive] = useState("");

    const pathname = usePathname();

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-black">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href={'/'}
                    className="flex flex-row items-center gap-2"
                >
                    <Image
                        src="/assets/logo.svg"
                        alt="Logo"
                        width={9}
                        height={9}
                        className="w-9 h-9 object-contain cursor-pointer"
                    />
                    <p className="text-neutral-200 text-[18px] font-bold cursor-pointer flex">
                        <span className="sm:block hidden">Ambrose</span> &nbsp;

                        <span className="flex flex-row">
                            <span className="sm:block hidden">|</span>&nbsp;
                            <span className="block">codeVeegan</span>
                        </span>
                    </p>
                </Link>

                {pathname === '/' && <ul className="list-none hidden sm:flex flex-row gap-3">
                    {navLinks?.map((link) => (
                        <li
                            key={link.id}
                            className={cn(
                                "text-neutral-200 hover:text-neutral-400 items-center justify-center text-[18px] font-medium cursor-pointer",
                                active === link.title && "hover:text-neutral-400"
                            )}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>}

                {pathname === '/' && <div className="sm:hidden flex flex-1 justify-end items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Menu className='text-neutral-200 dark:text-white bg-cover bg-center cursor-pointer' />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56 bg-neutral-800 border-none">
                            <DropdownMenuGroup>
                                {navLinks?.map((link) => (
                                    <DropdownMenuItem
                                        key={link.id}
                                        className={cn(
                                            "text-neutral-200 bg-neutral-700 hover:bg-neutral-800 items-start justify-center text-[18px] font-medium cursor-pointer",
                                            active === link.title && "hover:bg-neutral-800"
                                        )}
                                        onClick={() => setActive(link.title)}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>}
            </div>
        </nav>
    );
};

export default Navbar;