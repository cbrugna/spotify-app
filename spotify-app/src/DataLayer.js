import React, 
{   createContext,
    useContext,
    useReducer }
    from "react";

export const DataLayerContext = createContext();

// This is what wraps App in index.js
export const DataLayer = ({  inititalState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, inititalState)}>
        {children}
    </DataLayerContext.Provider>
);

// For dispatching an action or getting access to value
export const useDataLayerValue = () => useContext(DataLayerContext);