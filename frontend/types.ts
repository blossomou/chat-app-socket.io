import { ReactNode } from 'react';
import {
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type TypoProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle['fontWeight'];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
};

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
  isModal?: boolean;
  showPattern?: boolean;
  bgOpacity?: number;
};

export interface ButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

export type BackButtonProps = {
  style?: ViewStyle;
  color?: string;
  iconSize?: number;
};

export interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
}

export type AuthContextProps = {
  token: string | null;
  user: UserProps | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    name: string,
    avatar?: string,
  ) => Promise<void>;
  signOut: () => Promise<void>;
  updateToken: (token: string) => Promise<void>;
};

export interface UserProps {
  email: string;
  name: string;
  avatar: string | null;
  id?: string;
  //Add any additional fields from the token payload as needed
}

export interface DecodedTokenProps {
  user: UserProps;
  exp: number;
  iat: number;
}

export type HeaderProps = {
  title?: string;
  style?: ViewStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type AvatarProps = {
  size?: number;
  uri: string | null;
  style?: ViewStyle;
  isGroup?: boolean;
};

export interface UserDataProps {
  name: string;
  email: string;
  avatar?: any;
}

export type ResponseProps = {
  success: boolean;
  data?: any;
  msg?: string;
};
