import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars:[],
    carForUpdate:null,
    errors: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
        const {data} = await carService.getAll();
        return data
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car})=>{
        const {data} = await carService.updateBYId(id, car)
        return data
    }
)


const create = createAsyncThunk(
    'create',
    async ({car})=>{
       const {data} = await carService.create(car)
        return data
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
                state.errors = null
            })
            .addCase(getAll.rejected, (state, action) =>{
                state.errors = action.payload
            })
            .addCase(updateById.fulfilled, (state, action)=>{
                const currentCar = state.cars.find(value=> value.id===action.payload.id)
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null
            })
            .addCase(create.fulfilled, (state, action)=>{
                state.cars.push(action.payload)
            })
            .addCase(create.rejected, (state, action)=>{
                console.log('error')
            })
})

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    create
}

export {
    carReducer,
    carActions
}