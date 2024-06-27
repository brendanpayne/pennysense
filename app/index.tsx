import { ScrollView, Text, View, useColorScheme, Image, Animated } from 'react-native'
import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { styles } from '@/constants/Styles'

import { onboardConfig } from '@/constants/index'
import {PrimaryButton, SecondaryButton } from '@/components/Buttons'

const indicator = (scrx: Animated.Value) => {
  return (
    <View className="flex-row justify-center mt-4">
      {onboardConfig.map((_, index) => {
        const opacity = scrx.interpolate({
          inputRange: [(index - 1) * 375, index * 375, (index + 1) * 375],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });
        return (
          <Animated.View
            key={index}
            style={{ opacity }}
            className={`w-2 h-2 rounded-full bg-primary mx-1.5`}
          />
        );
      })}
    </View>
  );
}

const index = () => {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? 'bg-dark-background' : 'bg-light-background';
  const textColor = colorScheme === 'dark' ? 'text-dark-text' : 'text-light-text';

  const scrx = useRef(new Animated.Value(0)).current;

  return (
    <View className={`h-full ${bgColor}`}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrx } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode='never'
        className="w-full"
      >
        {onboardConfig.map((_, i) => (
          <View key={i} className="w-screen h-full items-start justify-start gap-0">
            <Image 
              source={onboardConfig[i].image} 
              className="w-full h-[80%]"
              resizeMode="cover" 
            />
            <View className="items-start justify-start gap-2 p-2">
              <Text className={`${styles.onboard.title} ${textColor}`}>{onboardConfig[i].title}</Text>
              <Text className={`${styles.onboard.desc} ${textColor}`}>{onboardConfig[i].desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View className="h-[30%]">
        {indicator(scrx)}
        <PrimaryButton 
          title="Get Started" 
          containerStyle="m-4" 
          onPress={() => router.push('/sign-up')}
        />
        <SecondaryButton 
          title="Log In" 
          containerStyle={`mx-4`} 
          textStyle={textColor} 
          onPress={() => router.push('/sign-in')}
        />
        <View className="-bottom-6 justify-center items-center">
          <Text className={`font-iregular text-[15px] text-center text-gray`}>
            By continuing you accept our{'\n'} 
            <Link href="/terms" className={styles.hyperlink}>Terms of Service</Link>{' '}
            and <Link href="/privacy" className={styles.hyperlink}>Privacy Policy</Link>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default index