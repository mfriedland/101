
import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text } from 'react-native';
import store from '../../store.js'
import { fetchUsers } from '../../reducers/AllUsers'

const ITEM_WIDTH = Dimensions.get('window').width

class Trending extends Component {

  state = {
    columns: 3,
    key: 1,
    array: [],
  }

  constructor(props) {
    super(props)
    this.getImageData = this.getImageData.bind(this)
  }

  componentDidMount() {
    // store.dispatch(fetchUsers())
    let dataToRender = store.getState()
    console.log(dataToRender.AllUsers)
    // this.getImageData()
  }

 getImageData = () => {
   axios.get('/users')
     .then(res => {
      console.log('line 35', res)
      return res.data
     })
     .then(users => {
      this.setState({data: users})
     })
 };

  // getImageData() {
  //   // fetch("https://randomuser.me/api?page=1&results=10&inc=picture.name", {
  //     fetch("https://randomuser.me/api/?results=500", {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     let newArray = this.state.array.slice()
  //     let concatArray = newArray.concat(responseJson.results)
  //     return this.setState({array: concatArray})
  //   })
  // }

//  <Button
//       onPress={() => {
//         let {columns, key} = this.state
//         columns = columns === 3? 1 : 3
//         this.setState({columns: columns, key: key+1})
//       }}
//       title='Toggle Layout' />
 render() {

    let assets = [
      {image: '../../../assets/images/college1.jpg'},
      {image: '../../../assets/images/college2.jpg'},
      {image: '../../../assets/images/college3.jpg'},
      {image: '../../../assets/images/college4.jpg'},
      {image: '../../../assets/images/college5.jpg'},
      {image: '../../../assets/images/college6.jpg'},
      {image: '../../../assets/images/college7.jpg'},
      {image: '../../../assets/images/college8.jpg'},
      {image: '../../../assets/images/college9.jpg'},
      {image: '../../../assets/images/college10.jpg'},
      {image: '../../../assets/images/college11.jpg'},
      {image: '../../../assets/images/college12.jpg'},
      {image: '../../../assets/images/college13.jpg'},
      {image: '../../../assets/images/college14.jpg'},
      {image: '../../../assets/images/college15.jpg'},
      {image: '../../../assets/images/college16.jpg'},
      {image: '../../../assets/images/college17.jpg'},
      {image: '../../../assets/images/college18jpg'},
      {image: '../../../assets/images/college19.jpg'},
      {image: '../../../assets/images/college20.jpg'},
    ]

    const { columns, key, array } = this.state
   const itemWidth=((ITEM_WIDTH - (10*columns)) / columns)
   console.log('hey',columns, key, array, this.state.array)
   return (
      <View style={styles.container}>
        <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}> Musicians </Text>
            <Text style={styles.headingText}> Dancers </Text>
            <Text style={styles.headingText}> Models </Text>
        </View>
        <View style={styles.container}>
        <FlatList
          // key={key}
          keyExtractor= {
            (item, index) => index }
          numColumns={columns}
          data={assets}

          renderItem={({item, index}) =>  {
          let picture = item.image
          console.log(item.image, `'${item.image}'`)

          return <Image style={{width: 120, height: 90, marginRight: 10}} source={{ uri: item.image }} />
          }}
            // image={{uri: item.picture.large}} />

        />
        </View>
      </View>
   )
 }
}

export { Trending };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12092f',
    justifyContent: 'center',
    alignItems: 'center',
},
  headingTextContainer: {
    // flex: 1,
    alignItems:'center',
    justifyContent :'space-around',
    height: 20,
    marginRight: 30,
    flexDirection:'row'
  },
  headingText: {
    fontSize: 15,
    color: 'lightgrey',
    // justifyContent :'space-around',
  },
})


// import React, { Component } from "react";
// import { View, Text, FlatList, ActivityIndicator } from "react-native";
// import { List, ListItem, SearchBar } from "react-native-elements";
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

// class Trending extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false
//     };
//   }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }


//  makeRemoteRequest = () => {
//    axios.get('/api/users')
//      .then(res => {
//       console.log('line 35', res)
//       return res.data
//      })
//      .then(users => {
//       this.setState({data: users})
//      })
//  };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: "#CED0CE",
// //          marginLeft: "14%"
//         }}
//       />
//     );
//   };

//   renderHeader = () => {
//     return <SearchBar placeholder="Type Here..." lightTheme round />;
//   };

//   renderFooter = () => {
//     if (!this.state.loading) return null;

//     return (
//       <View
//         style={{
//           paddingVertical: 20,
//           borderTopWidth: 1,
//           borderColor: "#CED0CE"
//         }}
//       >
//         <ActivityIndicator animating size="large" />
//       </View>
//     );
//   };

//   render() {
//     console.log('104', this.state.data)
//     return (
// //            <View style={{flexDirection: 'row', flex: 1}}>

//             <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//              <ListItem
//             image src={item.photo}
//               containerStyle={{ borderBottomWidth: 0 }}
//             />
//           )}
//           keyExtractor={item => item.email}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListFooterComponent={this.renderFooter}
//           onRefresh={this.handleRefresh}
//           refreshing={this.state.refreshing}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={1}
//              horizontal={false}
//             numColumns={3}

//         />
//       </List>
// //            </View>
//     );
//   }
// }
