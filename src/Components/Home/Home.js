import React from 'react';

import Header from '../MainHeader/Header';
import Intro from './Intro';
import MealForm from '../Meals/MealForm';

const Home = (props) => {

    return (
        <React.Fragment>
            <Header />
            <Intro />
            <MealForm/>
        </React.Fragment>
    )
}

export default Home;