import React, { useState } from 'react';
import AddNewService from '../../Components/AddNewService/AddNewService';
import Header from '../../Components/Header/Header';
import ManageAllOrders from '../../Components/ManageAllOrders/ManageAllOrders';
import MyOrders from '../../Components/MyOrders/MyOrders';
import AddWhyUs from '../../Components/WhyUs/AddWhyUs';

const Dashboard = () => {
    const [control, setControl] = useState("myOrders")
    const buttonStyle = 'bg-gray-900 hover:text-white text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-start'
    return (
        <>
            <Header></Header>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="container mx-auto">
                    <div class="grid md:grid-cols-4 gap-4">
                        <div class="col">
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 borderborder-gray-200 rounded-lg h-96">
                                        <div className="flex flex-col justify-center space-y-2">
                                            <button className={buttonStyle} onClick={() => setControl("myOrders")}>My orders</button>
                                            <button className={buttonStyle} onClick={() => setControl("allOrders")}>Manage All Orders</button>
                                            <button className={buttonStyle} onClick={() => setControl("newService")}>Add New Service</button>
                                            <button className={buttonStyle} onClick={() => setControl("AddWhyUs")}>Add New Service</button>

                                        </div>
                                    </div>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                        <div class="md:col-span-3">
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto bg-gray-100">
                                        {control === 'myOrders' && <MyOrders />}
                                        {control === 'allOrders' && <ManageAllOrders />}
                                        {control === 'newService' && <AddNewService />}
                                        {control === 'AddWhyUs' && <AddWhyUs />}
                                    </div>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Dashboard;