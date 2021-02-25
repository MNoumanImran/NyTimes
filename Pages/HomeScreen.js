
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Icon ,Avatar,Card} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=EsypEiNcBIRqTyCPQhTjDCky5yFpZnXj')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson.results);
        setMasterDataSource(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const RenderItem = (data) => {
   
    return (
    <TouchableOpacity style={{backgroundColor: 'transparent'}}
    onPress={()=>Alert.alert(''+data.item.abstract)}>
               <Card>
                <View  style={{
                  margin:1,
                  flexDirection:'row',
                  flex:3
                }}>
                     <View  style={{flexDirection:'row',alignSelf:'center', flex:0.5}}>
                  <Avatar
rounded
source={{
uri:
  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
}}
/></View>
<View  style={{
                
                  flexDirection:'column',
                  flex:2
                }}>
                    <Text style={{fontWeight:'bold',fontSize:15}} >{data.item.title}</Text>
                    <View  style={{
                marginTop:10,
                flexDirection:'row',
                flex:1
              }}>
                  <View  style={{marginTop:10,flexDirection:'row',flex:1 }}>
<Text >{data.item.subsection}</Text>
</View>
<View  style={{marginTop:10,flexDirection:'row',flex:1 }}>
<Text >{data.item.published_date}</Text>
</View>  

                    </View>
                  </View>
                
                  <View  style={{flexDirection:'row',alignSelf:'center', }}>

                 <Icon
name='chevron-right'
type='font-awesome-5'
color='#000'
/></View>
                </View>
                </Card>
            </TouchableOpacity>
            )
}

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{size: 24}}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={RenderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default App;