import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const CarFormCreate = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch()

    const submitCreate = async (newCar) => {
        await dispatch(carActions.create({car:newCar}))
        reset()
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submitCreate)}>
                    <label>
                        <input type="text" placeholder={'model'} {...register('model')}/>
                    </label>
                    <label>
                        <input type="text" placeholder={'price'} {...register('price')}/>
                    </label>
                    <label>
                        <input type="text" placeholder={'year'} {...register('year')}/>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CarFormCreate;