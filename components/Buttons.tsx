import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: any;
  textStyle?: any;
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  isLoading
}) => {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={`bg-primary rounded-full px-[24px] py-[16px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        disabled={isLoading}
        >
        <Text className={`text-white text-[16px] font-isemibold ${textStyle}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  )
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  isLoading
}) => {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={`rounded-full px-[24px] py-[16px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        disabled={isLoading}
        >
        <Text className={`text-[16px] font-isemibold ${textStyle}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  )
}