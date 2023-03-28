import _ from 'lodash';
import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {TextHighlight} from '../highlight-text';
import {dynamicSearchWithMultiKeys} from '../utils';
import USER_DATA from '../utils/user-data.json';

export const ExampleTextHighlight = () => {
  const [arrData, setArrData] = useState(USER_DATA);
  const [searchText, setSearchText] = useState('');

  const renderItem = ({item, _index}: any) => {
    return (
      <View key={String(_index)} style={styles.usersCardConainer}>
        <View style={styles.row}>
          <TextHighlight
            text={`Name: `}
            isSearchable={false}
            style={styles.labelStyle}
          />
          <TextHighlight
            text={`${item.firstName} ${item.lastName}`}
            isSearchable={true}
            highlightedColor={'yellow'}
            style={styles.highlight}
            searchText={searchText}
          />
        </View>
        <View style={styles.row}>
          <TextHighlight
            text={`Phone Number: `}
            isSearchable={false}
            style={styles.labelStyle}
          />
          <TextHighlight
            text={`${item.phone}`}
            isSearchable={true}
            highlightedColor={'yellow'}
            style={styles.highlight}
            searchText={searchText}
          />
        </View>
        <View style={styles.row}>
          <TextHighlight
            text={`Age: `}
            isSearchable={false}
            style={styles.labelStyle}
          />
          <TextHighlight
            text={`${item.age}`}
            isSearchable={true}
            highlightedColor={'yellow'}
            style={styles.highlight}
            searchText={searchText}
          />
        </View>
      </View>
    );
  };

  const onChangeText = (text: string) => {
    setSearchText(text);
    if (!_.isEmpty(text)) {
      setArrData(
        dynamicSearchWithMultiKeys(
          USER_DATA,
          ['firstName', 'lastName', 'phone', 'age'],
          text,
        ),
      );
    } else {
      setArrData(USER_DATA);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={styles.inputBoxStyle}
        placeholder={'Search User'}
        onChangeText={onChangeText}
      />
      <FlatList
        data={arrData}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={renderItem}
        keyExtractor={(_item, index) => String(index)}
        ItemSeparatorComponent={() => <View style={styles.seperatorStyle} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seperatorStyle: {
    backgroundColor: 'grey',
    height: 1,
  },
  usersCardConainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  highlight: {
    fontWeight: '600',
    fontSize: 15,
  },
  row: {flexDirection: 'row'},
  inputBoxStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    margin: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  labelStyle: {
    fontWeight: '400',
    fontSize: 15,
  },
});
