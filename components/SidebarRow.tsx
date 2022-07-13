import React, { FC, SVGProps } from 'react'

interface SidebarRowProps {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}


const SidebarRow: FC<SidebarRowProps> = ({Icon, title, onClick}) => {
  return (
    <div onClick={() => onClick?.()} className="flex max-w-fit items-center cursor-pointer space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
        <Icon className="h-6 w-6" />
        <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl">{title}</p>
    </div>
  )
}

export default SidebarRow