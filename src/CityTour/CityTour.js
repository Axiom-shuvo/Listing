import React from 'react';
import './tourapp.scss';

import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';

function CityTour(){
    return(
        <div>
            <Navbar />
            <TourList />
        </div>
        
    )
}


export default CityTour;