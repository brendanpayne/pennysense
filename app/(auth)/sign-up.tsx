import { View, Text, ScrollView, useColorScheme, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { PrimaryButton, SocialButton } from '@/components/Buttons'
import { styles } from '@/constants/Styles'
import { icons, logo } from '@/constants/Images'
import { Link, router } from 'expo-router'

import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const colorScheme = useColorScheme()

  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match') 
      return
    }

    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.name)
      // TODO: set to global state
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
          <Text className={`mt-7 mx-auto text-3xl font-iextrabold ${colorScheme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>Create an account</Text>
          <FormField
            label='Name'
            value={form.name}
            onChangeText={(text: string) => setForm({ ...form, name: text })}
            style='mt-7 w-full'
            dark={colorScheme === 'dark'}
            placeholder='Enter your full name'
          />
          
          <FormField
            label='Email'
            value={form.email}
            onChangeText={(text: string) => setForm({ ...form, email: text })}
            style='mt-4 w-full'
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

          <FormField
            label='Confirm Password'
            value={form.confirmPassword}
            onChangeText={(text: string) => setForm({ ...form, confirmPassword: text })}
            style='mt-4'
            dark={colorScheme === 'dark'}
            secureTextEntry={true}
            placeholder='Confirm your password'
          />

          <PrimaryButton
            title='Sign up'
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
        <Link href='/sign-in' className='mt-10 text-lg mx-auto'>
          <Text className={`font-imedium text-gray`}>Already have an account?{' '}</Text>
          <Text className={styles.hyperlink}>Sign in</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp