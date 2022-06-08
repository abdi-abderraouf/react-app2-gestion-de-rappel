import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ShowRappels from './ShowRappels';

const RappelCard = (props) => {
    const  rappel = props.rappel;

    return(
        <div className="card-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzy6ZCQrKzb9z1GJjMReVGSmu6hqRAzl6Tw&usqp=CAU" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/UpdateRappel/${rappel._id}`}>
                        { rappel._id }
                    </Link>
                </h2>
                <h3>{rappel.texte}</h3>
                <p>{rappel.Date}</p>
            </div>
        </div>
    )
};

export default RappelCard;