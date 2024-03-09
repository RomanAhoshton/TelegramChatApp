import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User} from '../../types';

interface UserState {
  users: User[] | null;
}
const initialState: UserState = {
  user: [],
};

export const getUsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.user = action.payload;
    },

    removeUser: state => {
      state.user = null;
    },
  },
});

export const {setUser, removeUser} = getUsersSlice.actions;

export default getUsersSlice.reducer;
