import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { styles } from '@/constants/Styles'
import ProgressBar from '@/components/ProgressBar'

const Budget = () => {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark';
  const textColor = darkMode ? 'text-dark-text' : 'text-light-text';
  return (
    <>
      <Text className={`${styles.home.budget.title} ${textColor}`}>My Budgets</Text>
      <View className={`${styles.home.budget.container} ${darkMode ? 'bg-black-200' : 'bg-white-200'}`}>
        <Text className={`${styles.home.budget.subtitle} ${textColor}`}>Total Expenses</Text>
        <View className='flex-row justify-start items-center'>
          <Text className={styles.home.budget.amount}>$1,000.00</Text>
          <Text className={`${styles.home.budget.max} ${textColor}`}>{' '}/ $2,000.00</Text>
        </View>
        <View>
          <ProgressBar progress={50} />
        </View>
        <Link href='/budgets'>
          <Text className={`${styles.home.budget.content} ${textColor}`}>See details</Text>
        </Link>
      </View>
    </>
  )
}

export default Budget