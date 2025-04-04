const React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/theme';

const BarraSup = ({ onToggleTheme, isDarkTheme }) => {
  return (
    <View style={styles.barraSup}>
      <Image source={require('../assets/images/logo.svg')} style={styles.logo} />
      <TouchableOpacity onPress={onToggleTheme} style={styles.themeToggle}>
        <Image 
          source={isDarkTheme ? require('../assets/images/icon-sun.svg') : require('../assets/images/icon-moon.svg')} 
          style={styles.themeIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default BarraSup;