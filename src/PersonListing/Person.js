import React from 'react';
import Aicon from './axiomshuvo.svg';

    const Person = (props) => {
  
        const {img,name,job} = props.data;
        const {children} = props;
        //const imgUrl = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
        // console.log(props.data);

        return(
          <div className="Person" >
            <img src={Aicon} alt="Person" />
            <div>
              <h3>{name}</h3>
              <h4>{job}</h4>
              {children}
            </div>
          </div>
        )
      };
    
      export default Person;