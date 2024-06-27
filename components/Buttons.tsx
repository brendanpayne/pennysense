import { Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: any;
  textStyle?: any;
  isLoading?: boolean;
  icon?: any;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  isLoading
}) => {
  return (
    <GestureHandlerRootView className="w-full">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={`bg-primary rounded-full px-[24px] py-[16px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : 'opacity-100'} flex-grow`}
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
    <GestureHandlerRootView className="w-full">
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

export const SocialButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  icon
}) => {
  return (
    <GestureHandlerRootView className="px-2">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={`rounded-full border-[1.5px] bg-white border-opacity-30 border-gray px-[24px] py-[12px] justify-center items-center ${containerStyle}`}
        >
        <Image
          source={icon}
          className='w-6 h-6 '
          resizeMode='contain'
        />
      </TouchableOpacity>
    </GestureHandlerRootView>
  )
}