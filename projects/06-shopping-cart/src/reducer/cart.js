export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];


export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART:'CLEAR_CART'
}

//update localstorage with state fo cart

export const upateLocalStorage = state =>{
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
      case CART_ACTION_TYPES.ADD_TO_CART: {
        const { id } = actionPayload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
        if (productInCartIndex >= 0) {
          //Una forma seria usando structuredClone
  
          const newState = structuredClone(state);
          newState[productInCartIndex].quantity += 1;
          return newState;
        }
        const newState= [
          ...state,
  
          {
            ...actionPayload,
            quantity: 1,
          },
        ];
        upateLocalStorage(newState)
        return newState
      }
      case CART_ACTION_TYPES.REMOVE_FROM_CART: {
        const { id } = actionPayload;
        const newState= state.filter((item) => item.id !== id);
        upateLocalStorage(newState)
        return newState
      }
      case CART_ACTION_TYPES.CLEAR_CART: {
        upateLocalStorage([])
        return [];
      }
    }
  
    return state;
  };