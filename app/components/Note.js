
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class App extends Component {
  render() {
    return (
        <View style = {styles.container} key = {this.props.keyval}>

            <View style = {styles.showContent}>

                <Text style = {styles.notetext}>{this.props.val.date}</Text>
                <Text style = {styles.notetext}>{this.props.val.note}</Text>

            </View>
            <TouchableOpacity onPress = { this.props.deleteMethod}><Text style = {styles.delButton}> del </Text></TouchableOpacity>

        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",
   position: 'relative',
   padding: 20,
  },
  showContent:{
    flexDirection: 'column',
    flex: 8
  },
  notetext:{
      fontSize: 18
  },
  delButton:{
    color: "#ce1616" 
  }
});
