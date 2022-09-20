/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  HomeScreen: undefined;
  JitNavigator: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  Modal: undefined;
  NotFound: undefined;
  ProfileScreen: { username: string };
  SingleJitScreen: {
    jitId: number;
    jitBody: string;
    jitName: string;
    jitUsername: string;
    jitUpdatedAt: string;
    jitCreatedAt: string;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Account: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  user: {
    id: number;
    username: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  token: {
    type: string;
    token: string;
    expires_at: string;
  };
};

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => Promise<void>;
};

export type Jit = {
  id: number;
  user_id: number;
  username: string;
  name: string;
  body: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type JitState = {
  jits: Jit[];
  jitLoading: boolean;
  jitError: string | null;
  setJits: () => Promise<void>;
  clearJits: () => Promise<void>;
};
