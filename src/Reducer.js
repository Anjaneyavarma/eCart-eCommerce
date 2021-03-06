export const initialState = {
    basket: [],
};

export const getTotalPrice = (basket) => 
    basket.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return{...state}

        case "ADD_TO_BASKET":
            return {...state,
            basket:[...state.basket, action.item]};
        case "REMOVE":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index>=0){
                newBasket.splice(index, 1)
            }

            return {...state, basket: newBasket}
        default:
            return state;
    }
}

export default reducer;