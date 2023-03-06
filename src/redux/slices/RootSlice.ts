import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        distiller: 'Distiller',
        type: "Type",
        country: "Country",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseDistiller: (state, action) => { state.distiller = action.payload },
        chooseType: (state, action) => { state.type = action.payload },
        chooseCountry: (state, action) => { state.country = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseDistiller, chooseType, chooseCountry } = rootSlice.actions