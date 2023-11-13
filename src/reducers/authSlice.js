// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  type: null,
  organization: null,
  subject: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setOrganization: (state, action) => {
      state.organization = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
  },
});

export const { setEmail, setType, setOrganization, setSubject } = authSlice.actions;

export default authSlice.reducer;
