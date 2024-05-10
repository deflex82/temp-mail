"use client";
import { cn } from '@/lib/utils';
import { HistoryIcon, Home, Inbox } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { ModeToggle } from './Modetoggle';

const Sidebar = () => {
    const pathname = usePathname();

    const navlinks =  [
        {
            id:1,
            name:"Home",
            link:"/",
            icon:Home
        },
        {
            id:2,
            name:"Inbox",
            link:"/inbox",
            icon:Inbox
        },
      
    ]
  return (
    <div className='shadow-md hidden md:block w-64 border p-4 h-screen cursor-pointer'>
       <Link href={"/"}>
       <Image src={"/logo.svg"} className='' height={180} width={50} alt='logo'/>
        </Link>


        <div className="mt-12 flex flex-col gap-4">
            {navlinks.map(links=>{
                return(
                 <Link key={links.id} href={links.link}>
                    <nav className={cn("flex items-center gap-4 transition p-2 hover:bg-blue-600 hover:text-slate-100 hover:font-bold rounded-xl ",`${pathname==links.link?"bg-blue-600 rounded-xl hover:bg-blue-600/80 transition text-slate-100 font-bold":""}`)  } >
                        <links.icon/>
                        {links.name}

                        </nav>

                 </Link>   
                )
            })}
            <ModeToggle/>
            
        </div>


    </div>
  )
}

export default Sidebar