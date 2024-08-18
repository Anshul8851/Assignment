import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading:false,
    cardsData:[],
};

export const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        setCardsData(state,value){
            state.cardsData = value.payload;
        },
        setLoading(state,value){
            state.loading = value.payload;
        },
        
    },
});

export const {setCardsData,setLoading} = cardSlice.actions;
export default cardSlice.reducer;