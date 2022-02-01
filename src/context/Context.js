import React, { useReducer } from 'react';

export const footballContext = React.createContext();
const INIT_STATE = {
    players: [],
    footballField: [],
}

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PLAYERS":
            return {...state, players: action.payload}
        case "GET_FOOTBALLFIELD":
            return {...state, footballField: action.payload}
        default: return state
    }
}
const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    
    return (
        <footballContext.Provider value={{
            players: state.players,
            footballField: state.footballField,
        }}>
            {children}
        </footballContext.Provider>
    );
};

export default Context;