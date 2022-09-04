import * as React from 'react';
import {Divider, IconButton, MD3Colors} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  },
});

const Footer = () => {
  return (
    <>
      <Divider />
      <View style={[styles.container]}>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </>
  );
};

export default Footer;
