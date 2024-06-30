import { View } from 'react-native'
import React from 'react'

interface ProgressBarProps {
  progress: number,
  containerStyle?: any,
  primaryColor?: string,
  secondaryColor?: string
}

const ProgressBar = ({
  progress,
  containerStyle,
  primaryColor = 'bg-primary',
  secondaryColor
}: ProgressBarProps) => {
  return (
    <View className={`h-4 ${secondaryColor} rounded-full ${containerStyle}`}>
      <View className={`h-full ${primaryColor} rounded-full`} style={{ width: `${progress}%` }} />
    </View>
  )
}

export default ProgressBar