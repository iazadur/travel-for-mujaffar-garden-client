/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaAlignRight } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineBell } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../asserts/logos/Group 1329.png'
import useAuth from '../../Hooks/useAuth';
import { Disclosure } from '@headlessui/react'



const Header = () => {
    const { logOut, user } = useAuth()

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: true },
        { name: 'Service', href: '/service', current: false },
        { name: 'Rooms', href: '/room', current: false },
        { name: 'Contact', href: '/contact', current: false },

    ]
   

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-100">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                      <Link to="/">
                                            <img
                                                className="h-8"
                                                src={logo}
                                                alt="Workflow"
                                            />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>



                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">


                                            {user?.email ? <Menu as="div" className="ml-3 relative">
                                                        <div>
                                                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                
                                                                <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {/* {userNavigation.map((item) => (
                                                                    <Menu.Item key={item.name}>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href={item.href}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                                )}
                                                                            >
                                                                                {item.name}
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))} */}

                                                                <Menu.Item>
                                                                    
                                                                        <button
                                                                            onClick={logOut}
                                                                            className='block px-4 py-2 text-sm text-gray-700'>
                                                                            Sign Out
                                                                        </button>
                                                                    
                                                                </Menu.Item>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>

                                                



                                                :

                                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                                                    <Link
                                                        to="/signin"
                                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                    >
                                                        Sign in
                                                    </Link>
                                                </div>
                                            }




                                        </div>

                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <FaAlignRight className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.displayName}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <AiOutlineBell className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">

                                        <Disclosure.Button

                                            as="Link"
                                            onclick={logOut}

                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                        >
                                            My Order
                                        </Disclosure.Button>
                                        {/* {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="Link"
                                            onclick={item?.name === 'Sign out' ? logOut : null}
                                            
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))} */}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
        </>
    )
}

export default Header
