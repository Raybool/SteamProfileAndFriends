import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export type InputProps = {
  label: string;
  value: string;
  error?: string;
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
