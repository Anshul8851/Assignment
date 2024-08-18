import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setCardsData ,setLoading} from "../../Slices/cardSlice";

// import {toast} from 'react-hot-toast'

const {ALLCARDS_API,UPDATECARD_API} = endpoints;

export  function getAllCards() {
    return async(dispatch)=>{
        try{
            dispatch(setLoading(true));
            const response = await apiConnector("GET",ALLCARDS_API);
            if(response.data.success == false){
                toast.error("Unable to fetch card data ")
            }else{
                console.log(response.data);
                dispatch(setCardsData(response.data.allCards));
            }
            // console.log(response.data.allCards);
        }
        catch(error){
            console.log(error);
        }
        dispatch(setLoading(false));
    }
} 

export  function addCard(title,description,navigate) {
    return async(dispatch)=>{
        try{
            const response = await apiConnector("POST",UPDATECARD_API,{title,description});
            // console.log(response);
            toast.success("New Card Added ")
            dispatch(getAllCards());
            navigate('/');
            // console.log(response.data.allCards);
        }
        catch(error){
            toast.error("Card Not Added");
            console.log(error);
        }
    } 
} 

export  function searchCard(query) {
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try{
           
            const url = `http://localhost:8080/api/v1/search?query=${encodeURIComponent(query)}`;
            const response = await apiConnector("GET",url);
            console.log(response);
            dispatch(setCardsData(response.data));
        }
        catch(error){
            console.log(error);
        }
        dispatch(setLoading(false));
    }
} 