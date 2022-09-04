import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import {
  Colors,
  IconButton,
  MD3Colors,
} from 'react-native/Libraries/NewAppScreen';

import {Chip} from 'react-native-paper';

import imageClothes from './data/imageClothes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  containerChipsComponents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  chipComponent: {
    marginRight: 10,
    backgroundColor: '#F4F4F4',
    color: '#666',
  },
  containerProducts: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
  },
  rowProducts: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerProduct: {
    flex: 1,
    flexDirection: 'column',
  },
  productImage: {
    flex: 1,
    width: 150,
    marginBottom: 5,
  },
  productPrice: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

const SubCategoryResultsPage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scrollViewStyle = {
    ...styles.wrapper,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={scrollViewStyle}>
        <View styles={styles.wrapper}>
          <View styles={styles.header}></View>
          <ScrollView horizontal="true">
            <View style={styles.containerChipsComponents}>
              <Chip
                icon="information"
                style={styles.chipComponent}
                onPress={() => console.log('Pressed')}
              />
              <Chip
                icon="information"
                style={styles.chipComponent}
                onPress={() => console.log('Pressed')}>
                Price
              </Chip>
              <Chip
                icon="information"
                style={styles.chipComponent}
                onPress={() => console.log('Pressed')}>
                Brands
              </Chip>
              <Chip
                icon="information"
                style={styles.chipComponent}
                onPress={() => console.log('Pressed')}>
                Location
              </Chip>
              <Chip
                icon="information"
                style={styles.chipComponent}
                onPress={() => console.log('Pressed')}>
                Style
              </Chip>
            </View>
          </ScrollView>
          <View style={styles.containerProducts}>
            <View style={styles.rowProducts}>
              <View style={styles.containerProduct}>
                <Image style={styles.productImage} source={imageClothes} />
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Burberry - Mix of rain macs and
                </Text>
                <Text style={styles.productPrice}>$24/pc ($240)</Text>
              </View>
              <View style={styles.containerProduct}>
                <Image style={styles.productImage} source={imageClothes} />
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Burberry - Mix of rain macs and
                </Text>
                <Text style={styles.productPrice}>$24/pc ($240)</Text>
              </View>
            </View>
            <View style={styles.rowProducts}>
              <View style={styles.containerProduct}>
                <Image style={styles.productImage} source={imageClothes} />
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Burberry - Mix of rain macs and
                </Text>
                <Text style={styles.productPrice}>$24/pc ($240)</Text>
              </View>
              <View style={styles.containerProduct}>
                <Image style={styles.productImage} source={imageClothes} />
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Burberry - Mix of rain macs and
                </Text>
                <Text style={styles.productPrice}>$24/pc ($240)</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubCategoryResultsPage;
