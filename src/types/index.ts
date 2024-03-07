import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
};

export type BottomTabs = {
  Users: undefined;
  Chats: undefined;
  Profile: undefined;
};

export interface userFormValue {
  email: string;
  password: string;
  name?: string;
}

export interface User {
  name: string | null;
  photo: string | null;
  email: string | null;
  id: string | null;
}
