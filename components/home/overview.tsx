import { View, Text} from 'react-native'
import React from 'react'

import { styles } from '@/constants/Styles'
import { Link } from 'expo-router';

const Overview = () => {
  return (
    <View className={styles.home.overview.container}>
      <Text className={styles.home.overview.title}>Current Balance</Text>
      <Text className={styles.home.overview.balance}>$1,000.00</Text>
      <Link href='/transactions'>
        <Text className={styles.home.overview.content}>See details</Text>
      </Link>
    </View>
  )
}

export default Overview