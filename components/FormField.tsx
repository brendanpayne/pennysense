import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from '@/constants/Styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { icons } from '@/constants/Images';

interface FormFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  dark?: boolean;
  onChangeText: (text: string) => void;
  style?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  style,
  dark,
  secureTextEntry,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <GestureHandlerRootView>
      <View className={`space-y-2 ${style}`}>
        {/* <Text className={`${dark ? 'text-white' : 'text-black'} ${styles.form.label}`}>{label}</Text> */}
        <View 
          className={`${dark ? 'bg-black-100 border-black-100' : 'bg-white-100 border-white-100'} ${styles.form.inputContainer}`}
        >
          <TextInput
            className={`${dark ? 'text-white' : 'text-black'} ${styles.form.input}`}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={dark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
            onChangeText={onChangeText}
            secureTextEntry={label === 'Password' && !showPassword}
            {...props}
          />
          {label === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? icons.eye : icons.eyeOff}
                className='w-6 h-6 opacity-50 ml-2'
                resizeMode='contain'
                tintColor={dark ? 'white' : 'black'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default FormField;
