
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

import Note from './Note';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray : [],
      noteText: '',
    }
  }

  render() {

    let note = this.state.noteArray.map( (val,key) => {
        return <Note key = {key} keyval = {key} val = {val}
                deleteMethod = { ()=> this.deleteNote(key) } />
    });

    return (
      <View style = {styles.container}>
        
        <View style = {styles.header}>
            <Text style = {styles.headerText}> To - Do </Text>
        </View>

        <ScrollView style = {styles.scrollContainer}>
          {note}
        </ScrollView>

        <View style = {styles.footer}>
            <TextInput 
            style = {styles.textinput}
            placeholder = "Type here.. "
            onChangeText = { (noteText) => this.setState({noteText})}
            value = {this.state.noteText}
            placeholderTextColor = "white"
            underlineColorAndroid = 'transparent'></TextInput>

            <TouchableOpacity onPress = { this.addNote.bind(this)} style = {styles.button}>
                <Text style = {styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }

  addNote(){

    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: ''})
    }
  }

deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState( { noteArray: this.state.noteArray})
  }
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  header:{
      backgroundColor: '#238229',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
  },
  headerText:{
    color: '#fff',
    padding: 5,
    fontSize: 24,
    fontFamily: "Raleway"
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100
  },
  footer:{
    position: 'absolute',
    flexDirection: "row",
    marginBottom: 5,
    bottom: 0,
    left: 2,
    right: 2,
  },
  textinput:{
    flex: 3,  
    alignSelf: 'stretch',
    color: '#fff',
    fontSize: 18,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    padding: 8,
    borderRadius: 50
  },
  button:{
    flex: 1,
    backgroundColor: "#238229",
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
  }
});
