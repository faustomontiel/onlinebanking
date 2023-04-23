import Image from 'next/image'
import { BsLayoutTextSidebar } from 'react-icons/bs'

export default function Sidebar() {
    const menu = [
        { name: "Platform Launch", icon: <BsLayoutTextSidebar /> },
        { name: "Marketing Plan", icon: <BsLayoutTextSidebar /> },
        { name: "Roadmap", icon: <BsLayoutTextSidebar /> },
        { name: "+Create New Board", icon: <BsLayoutTextSidebar /> },
    ]

    const schedulePayments = ["Monthly Rent", "Food Payments", "Utility Bills"]

    return (
        <>
            <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-10">
                <div className="flex flex-row items-center">
                    <Image src="/logo.svg" alt="kanban" className="w-130 h-10" width={130} height={10} />
                </div>
                <div className='space-y-32'>
                    <div>
                        <ul className='space-y-7'>
                            <li key="all" className='flex flex-row items-center text-gray-400'>
                                <div>All boards (3)</div>
                            </li>
                            {menu.map((val, index) => {
                                return (
                                    <li key={index} className='flex flex-row items-center text-gray-400'>
                                        <div className='mr-5'>{val.icon}</div>
                                        <div>{val.name}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className='mb-7 text-indigo-600' >Schedule payments</div>
                        <div className='space-y-7'>
                            {schedulePayments.map((val, index) => {
                                return (
                                    <div key={index} className='flex items-center text-gray-400'>
                                        <div className='h-4 w-4 border border-indigo-500 mr-4 rounded-full' />
                                        {val}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}