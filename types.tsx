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
  SendJitScreen: undefined;
  SingleJitScreen: {
    jitId: number;
    jitBody: string;
    jitName: string;
    jitUsername: string;
    jitUpdatedAt: string;
    jitCreatedAt: string;
    jitLikeCount: number;
    jitCommentCount: number;
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
  name: string;
  email: string;
  password: string;
};

export type User = {
  name: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  id: number;
};

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => Promise<void>;
};

export type JitModel = {
  id: number;
  user_id: number;
  body: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  user: User;
};

export type JitState = {
  jits: JitModel[];
  jitLoading: boolean;
  jitError: string | null;
  setJits: () => Promise<void>;
  clearJits: () => Promise<void>;
};

export type LikeState = {
  isLiked: boolean;
  likeJit: (jitId: number) => Promise<void>;
  unLikeJit: (jitId: number) => Promise<void>;
};
