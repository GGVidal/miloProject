import React from 'react';
import {ModernHeader} from '@freakycoder/react-native-header-view';

const Header = ({children, navigation, search}) => {
  let props;
  props = {
    leftDisable: true,
    rightIconType: 'Ionicons',
    rightIconName: 'search-outline',
    rightIconColor: '#FFFFFF',
    rightIconOnPress: () => {
      navigation.push('Searchscreen');
    },
  };

  if (search) {
    props = {
      rightDisable: true,
    };
  }
  return (
    <ModernHeader
      backgroundColor="#00796B"
      text={children}
      height={60}
      textStyle={{fontSize: 25, color: '#FFFFFF'}}
      leftIconOnPress={() => navigation.goBack()}
      leftIconColor="#FFFFFF"
      {...props}
    />
  );
};

export default Header;
