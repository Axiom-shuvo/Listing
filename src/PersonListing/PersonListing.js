import React from 'react';
import Person from './Person';
import './PersonListing.css';

const PersonListing = () => {

    const PersonData= [
      {
        name:'Elon Musk',
        job:"Tesla,SpaceX",
        img:"22"
      },
      {
        name:'Bill Gates',
        job:"Gates Foundations",
        img:"1"
      },
      {
        name:'Steve Jobs',
        job:"Apple.Inc",
        img:"2"
      }
    ]
  
    return(
      <section>
        <Person data={PersonData[0]} />
        <Person data={PersonData[1]} >
          lorem ispum
        </Person>
        <Person data={PersonData[2]} />
      </section>
      )
      
    };


    export default PersonListing;
    
    

  