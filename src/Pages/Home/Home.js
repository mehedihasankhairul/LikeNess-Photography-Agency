import React from 'react';
import Services from '../Services/Services';
import Header from './../../Components/Header/Header';
import ClientsFeedback from './../../Components/ClientsFeedback/ClientsFeedback';
import RecentWork from '../../Components/RecentWork/RecentWork';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <ClientsFeedback />
            <RecentWork />
        </div>
    );
};

export default Home;