import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';

const homeEntries = createSlice({

  name: 'homeEntries',
  initialState:{},
  reducers: {
    addHome: (state, action) => {
    const aamount=action.payload.actualAmount;
    const name=action.payload.name;
    const pamount=action.payload.plannedAmount;
    console.log("step1",action.payload)
     // state.push({
        //id: Date.now().toString(),
        //...action.payload,
        state[Date.now().toString()] = { aamount, name, pamount };
        // state= [...state, { aamount, name, pamount }]
     // });
    },
  },
});

export const { addHome } = homeEntries.actions;
export default homeEntries.reducer;