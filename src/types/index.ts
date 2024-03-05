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
