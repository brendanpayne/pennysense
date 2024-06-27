import { View, Text, Image, useColorScheme } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { tabConfig } from '@/constants/index';

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image 
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      />
      <Text className={`text-xs ${focused ? 'font-isemibold' : 'font-iregular'}`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <Tabs 
      screenOptions={{
         tabBarShowLabel: false,
         tabBarActiveTintColor: Colors.primary,
         tabBarInactiveTintColor: theme.tabIconDefault,
         tabBarStyle: {
           backgroundColor: theme.background,
           borderTopWidth: 1,
           borderTopColor: theme.tint,
           height: '12%',
         },
      }}
    >
      {tabConfig.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={tab.icon} color={color} name={tab.title} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
