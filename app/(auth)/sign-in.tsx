import { View, Text, ScrollView, useColorScheme, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { PrimaryButton, SocialButton } from '@/components/Buttons'
import { styles } from '@/constants/Styles'
import { icons, logo } from '@/constants/Images'
import { Link, router } from 'expo-router'

import { signIn } from '@/lib/appwrite'

const SignIn = () => {
  const colorScheme = useColorScheme()

  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    try {
      const result = await signIn(form.email, form.password,)
      router.replace('/home')
    } catch (error: any) {
      Alert.alert('Error', error.message)
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className={`${colorScheme === 'dark' ? 'bg-dark-background' : 'bg-light-background'} h-full`}>
      <ScrollView>
        <Image 
          source={colorScheme === 'dark' ? logo.bannerDark : logo.bannerLight} 
          className='w-[80%] h-24 mt-7 mx-auto'
          resizeMode='contain' 
        />
        <View className='px-8 my-6 justify-center items-center'>
          <Text className={`mt-7 mx-auto text-3xl font-iextrabold ${colorScheme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>Welcome back!</Text>
          <FormField
            label='Email'
            value={form.email}
            onChangeText={(text: string) => setForm({ ...form, email: text })}
            style='mt-7 w-full'
            dark={colorScheme === 'dark'}
            keyboardType='email-address'
            placeholder='Enter your email'
          />

          <FormField
            label='Password'
            value={form.password}
            onChangeText={(text: string) => setForm({ ...form, password: text })}
            style='mt-4'
            dark={colorScheme === 'dark'}
            secureTextEntry={true}
            placeholder='Enter your password'
          />

          <PrimaryButton
            title='Sign in'
            containerStyle='my-7 w-full'
            onPress={() => handleSubmit()}
            isLoading={isSubmitting}
          />

          <Link href='/reset-pw'><Text className={`${styles.hyperlink} text-lg`}>Forgot password?</Text></Link>

          <Text className={`my-7 uppercase text-xs font-imedium text-gray`}>or login with</Text>
          
          <View className='flex-row justify-center items-center w-full'>
            <SocialButton
              title='Google'
              icon={icons.google}
              containerStyle='w-full'
              onPress={() => console.log('Google')}
            />
            <SocialButton
              title='Apple'
              icon={icons.apple}
              containerStyle='w-full'
              onPress={() => console.log('Apple')}
            />
            <SocialButton
              title='Microsoft'
              icon={icons.microsoft}
              containerStyle='w-full'
              onPress={() => console.log('Microsoft')}
            />
            <SocialButton
              title='Discord'
              icon={icons.discord}
              containerStyle='w-full'
              onPress={() => console.log('Discord')}
            />
          </View>
        </View>
        <Link href='/sign-up' className='mt-10 text-lg mx-auto'>
          <Text className={`font-imedium text-gray`}>Don't have an account?{' '}</Text>
          <Text className={styles.hyperlink}>Sign up</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn