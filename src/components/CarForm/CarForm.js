import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";


const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    })

    const submit = async (data) =>{
       await dispatch(carActions.updateById({id:carForUpdate.id, car: data}))
        reset()
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Update</button>
            </form>

        </div>
    );
};

export default CarForm;