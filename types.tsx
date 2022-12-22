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
import { UserInterfaceIdiom } from "expo-constants";

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
  ProfileScreen: {
    name: string;
    username: string;
    avatar_url: string;
    desc: string;
    url: string;
    email: string;
    created_at: string;
    updated_at: string;
    id: number;
  };
  SendJitScreen: undefined;
  SendCommentModal: {
    jitId: number;
    jitUsername: string;
    jitBody: string;
    jitName: string;
  };
  SingleJitScreen: {
    jitId: number;
    jitBody: string;
    user: User;
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
  Profile: undefined;
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
  avatar_url: string;
  desc: string;
  url: string;
  email: string;
  created_at: string;
  updated_at: string;
  id: number;
};

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
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

export type PaginationModel = {};

export type CommentModel = {
  id: number;
  user_id: number;
  jit_id: number;
  body: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  user: User;
};

export type JitState = {
  jits: JitModel[];
  // pagination: PaginationModel;
  fetchJits: () => Promise<void>;
  clearJits: () => Promise<void>;
  jitLoading: boolean;
  jitError: string | null;
};

export type CommentState = {
  comments: CommentModel[];
  commentsLoading: boolean;
  commentsError: string | null;
  fetchComments: (id: number) => Promise<void>;
  clearComments: () => Promise<void>;
};

export type LikeState = {
  likes: number[];
  isLiked: boolean;
  fetchLikes: () => Promise<void>;
  checkIfLiked: (id: number) => Promise<void>;
  likeJit: (jitId: number) => Promise<void>;
  unLikeJit: (jitId: number) => Promise<void>;
  clearLikes: () => Promise<void>;
};

export type SendJitState = {
  draftJit: string;
  sendJitLoading: boolean;
  sendJitError: null;
  sendJit: (body: string) => void;
};

export type SendCommentState = {
  draftComment: string;
  sendCommentLoading: boolean;
  sendCommentError: null;
  sendComment: (id: number, body: string) => void;
};
