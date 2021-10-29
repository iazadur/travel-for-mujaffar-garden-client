import React from 'react';
import Button from '../../Components/From/Button';
import Header from '../../Components/Header/Header';

const Dashboard = () => {
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
                                        <Button text="My Order"/>
                                        <Button text="My Order"/>
                                        <Button text="My Order"/>
                                    </div>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                        <div class="md:col-span-3">
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
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