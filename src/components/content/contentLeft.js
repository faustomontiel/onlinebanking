import Image from 'next/image'
import { BiSearch, BiHome, BiUser, BiCreditCard, BiDoughnutChart, BiEdit, BiTrash } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

export default function contentLeft() {
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.info('swipe action triggered')}>
                Action name
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'>
                    <BiTrash size={20} color='white' />
                </div>
            </SwipeAction>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'>
                    <FiEdit2 size={20} color='white' />
                </div>
            </SwipeAction>
        </TrailingActions>
    );
    return (
        <section className="content-left px-16 flex-1 pt-14 h-screen overflow-y-scroll">
            <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3">
                <BiSearch className="mr-2" />
                <input type={"text"} className="focus:outline-0 flex-1" placeholder="Seach" />
            </div>
            <h3 className="text-xl text-indigo-400 my-8">Welcome back Fausto Montiel!</h3>
            <div className="flex flex-row space-x-6">
                <Card
                    bgColor={"bg-green-600"}
                    txtColor={"text-green-600"}
                    icon={<BiCreditCard size={25} />}
                    label={
                        <span className="text-sm">
                            Transfer via
                            <br />
                            card number
                        </span>
                    }
                />
                <Card
                    bgColor={"bg-indigo-600"}
                    txtColor={"text-indigo-600"}
                    icon={<BiDoughnutChart size={25} />}
                    label={
                        <span className="text-sm">Transfer to another bank</span>
                    }
                />
                <Card
                    bgColor={"bg-orange-600"}
                    txtColor={"text-orange-600"}
                    icon={<BiUser size={25} />}
                    label={
                        <span className="text-sm">Transfer to the same bank</span>
                    }
                />
                <Card
                    bgColor={"bg-teal-600"}
                    txtColor={"text-teal-600"}
                    icon={<BiHome size={25} />}
                    label={
                        <span className="text-sm">Transfer to the same bank</span>
                    }
                />

            </div>
            <div className='mt-20'>
              {Array.from(Array(8)).map((_,index) => <div key={index} className='rounded-2xl bg-indigo-700 mb-4'>
                    <SwipeableList threshold={0.9} type={Type.IOS}>
                        <SwipeableListItem trailingActions={trailingActions()}>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 w-full flex">
                                <Image className='w-8 h-8 rounded-full object-cover mr-3' alt='img' src={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"}
                                    width={20}
                                    height={20}
                                />
                                <div className='text-sm'>
                                    <div className='text-gray-900'>Push</div>
                                    <div className='text-gray-400 text-xs'>546865213211</div>
                                </div>
                            </div>
                        </SwipeableListItem>
                    </SwipeableList>
                </div>)}
            </div>
        </section>
    )
}

function Card(props) {
    return (
        <div className={`rounded-xl ${props.bgColor} bg-opacity-10 p-5 py-7 w-32 ${props.txtColor}`} space-y-4>
            <div>{props.icon}</div>
            <div>{props.label}</div>
        </div>
    )
}