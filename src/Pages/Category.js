import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {List, MD3Colors, Divider} from 'react-native-paper';

const CategoryPage = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            <List.Item title="Jeans" left={() => <List.Icon icon="folder" />} />
            <List.Item
              title="Pants"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
            <List.Item
              title="Joggers & Sweatpants"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
            <List.Item
              title="Trousers"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
            <List.Item
              title="Shorts"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
            <List.Item
              title="Legging"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
            <List.Item
              title="Track paints"
              left={() => (
                <List.Icon color={MD3Colors.tertiary70} icon="folder" />
              )}
            />
          </List.Section>
          <List.Accordion title="Example of subcategory" id="1">
            <List.Item title="1. First item" />
            <List.Item title="2. Second item" />
            <List.Item title="3. Third item" />
          </List.Accordion>
          <Divider />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryPage;
