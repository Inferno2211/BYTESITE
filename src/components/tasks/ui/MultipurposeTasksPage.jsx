import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { Sidebar, Code, Smartphone } from 'lucide-react';
import WebDevTasks from '../data/WebDevTasks';
import AppDevTasks from '../data/AppDevTasks';
import MlTasks from '../data/MlTasks';
import MechatronicsTasks from '../data/MechatronicsTasks';
import CreativeOutreachTasks from '../data/CreativeOutreachTasks';
import CybersecTasks from '../data/CybersecTasks'
import ComingSoon from '../ComingSoon';
import { FaTasks } from 'react-icons/fa';
import KeyTakeaways from '../data/KeyTakeaways';

// Custom Sidebar Component
const CustomSidebar = ({ isOpen, toggleSidebar }) => (
    <div className={`bg-black w-64 p-4 fixed h-full transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Domains</h2>
        <ul className="space-y-2">
            <li><Link to="/tasks/webd" className="text-white hover:text-green-400">Web Development</Link></li>
            <li><Link to="/tasks/appd" className="text-white hover:text-green-400">App Development</Link></li>
            <li><Link to="/tasks/ml" className="text-white hover:text-green-400">Machine Learning</Link></li>
            <li><link to="/tasks/mechatronics" className="text-white hover:text-green-400" />Mechatronics</li>
            <li><link to="/tasks/creative-outreach" className="text-white hover:text-green-400" />Creative & Outreach</li>
            <li><link to="/tasks/cybersecurity" className="text-white hover:text-green-400" />CyberSecurity</li>
        </ul>
    </div>
);

// Custom Header Component
const CustomHeader = ({ title, toggleSidebar }) => (
    <div className="bg-green-400 p-4 text-black flex gap-x-20 items-center !flex-row">
        <button onClick={toggleSidebar} className="p-2 rounded hover:bg-black hover:text-green-400 transition-colors">
            <Sidebar size={'30px'} />
        </button>
        <h1 className="text-2xl w-fit font-bold">{title}</h1>
    </div>
);

// Task Card Component
const TaskCard = ({ title, description, icon: Icon }) => (
    <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg hover:shadow-green-400/50 transition-shadow">
        <div className="flex items-center mb-2">
            <Icon className="text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
    </div>
);

// Main Component
const MultipurposeTasksPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { domain } = useParams();
    const navigate = useNavigate();

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex bg-black text-white mt-16">

            <CustomSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 overflow-auto">
                        {domain === 'webd' && <WebDevTasks />}
                        {domain === 'appd' && <AppDevTasks />}
                        {domain === 'ml' && <MlTasks />}
                        {domain === 'mechatronics' && <MechatronicsTasks />}
                        {domain === 'creative-outreach' && <CreativeOutreachTasks />}
                        {domain === 'cybersecurity' && <CybersecTasks />}
                    </div>
                </div>
                <div className='w-[90%] m-auto'>
                    <KeyTakeaways/>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default MultipurposeTasksPage;