/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FaAlignRight } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../asserts/logos/Group 1329.png'
import useAuth from '../../Hooks/useAuth';




const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>

            <Popover className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <FaAlignRight className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">


                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </Link>
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Rooms suites
                            </Link>
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Services
                            </Link>
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Contact us
                            </Link>
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About us
                            </Link>


                        </Popover.Group>

                        {user?.email ? <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/signin" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700">{user?.email}</Link>
                            <Link
                                onClick={logOut}
                                to="/signup"
                                className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
                            >
                                Logout <AiOutlineLogout className="ml-2 text-lg" />
                            </Link>
                        </div>
                            :
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link to="/signin" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700">Sign in</Link>
                                <Link
                                    to="/signup"
                                    className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
                                >
                                    Sign up
                                </Link>
                            </div>}
                    </div>
                </div>

                {/* Mobile section  */}
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <FaAlignRight className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>

                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </Link>

                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </Link>

                                </div>
                                <div>
                                    <Link
                                        to="/"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </Link>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        </>
    );
};

export default Header;
