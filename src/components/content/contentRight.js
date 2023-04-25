import Image from 'next/image'
import { BiUser } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import visa from '/public/visa.svg'
import user from '/public/user.svg'
import TransactionList from '/src/components/content/TransactionList'

export default function ContentRight() {
    return (
        <section className='w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-14'>
            <div className='pt-11 flex justify-end space-x-9 items-center'>
                <GrNotification size={20} />
                <BiUser size={20} />
                <Image src={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt="user"
                    className="h-9 w-9 object-cover rounded-full"
                    width={20}
                    height={20}
                />
            </div>
            <div className='card mt-5'>
                <div className='relative p-5 text-white'>
                    <div className='text-lg'>John Smith</div>
                    <div className='mt-10 space-y-3'>
                        <div>Amazon Platinium</div>
                        <div>4756 ... ... 9018</div>
                        <div className='flex justify-between relative'>
                            <span>$3.469.52</span>
                            <Image src={visa} alt='visa' className='h-6 w-30' height={6} width={30} />
                        </div>
                    </div>
                </div>
            </div>
            <button className='py-3 rounded border border-indigo-400 text-indigo-400 border-dashed w-full mt-5'>
                    Add new card
            </button>
            <div>
                <TransactionList/>
            </div>
            </section>
    )
}
