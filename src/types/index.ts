import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenNames} from '../navigation/StackNavigation';
import {RouteProp} from '@react-navigation/native';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.ChatScreen
>;

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  TabNavigation: undefined;
  Users: undefined;
  Chats: undefined;
  Profile: undefined;
  Chat: DetailScreenParams;
};

export type BottomTabs = {
  Users: undefined;
  Chats: undefined;
  Profile: undefined;
};

type DetailScreenParams = {
  item: User;
};

export interface userFormValue {
  email: string;
  password: string;
  name?: string;
}

export interface User {
  name?: string | null;
  photo?: string | null;
  email?: string | null;
  id?: string | null;
}

export interface Message {
  sender: string | undefined;
  text: string;
  time: string;
  id: string;
  timestamp: object;
}
