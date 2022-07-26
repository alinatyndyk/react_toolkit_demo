import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const Car = ({car}) => {
    const {id, model, year, price} = car

    const dispatch = useDispatch()
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>UpdateCar</button>
        </div>
    );
};

export default Car;