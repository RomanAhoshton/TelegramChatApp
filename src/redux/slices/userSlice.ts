import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface UserState {
  user: FirebaseAuthTypes.User | null;
}
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload;
    },

    removeUser: state => {
      state.user = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
