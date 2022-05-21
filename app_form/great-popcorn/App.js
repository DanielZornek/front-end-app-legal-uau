import React, { useState } from "react";
import {TextInput, 
          View, 
          Button, 
          FlatList, 
          SafeAreaView, 
          StatusBar, 
          StyleSheet, 
          Text, 
          TouchableOpacity, 
          ImageBackground,
          CheckBox } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Manhã",
  },
  {
    id: "2",
    title: "Tarde",
  },
  {
    id: "3",
    title: "Noite",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
  
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState(null);
  const image = { uri: "https://i.pinimg.com/originals/95/5f/d5/955fd507b709b537697b50e68225c9de.jpg" };
  const [isSelected, setSelection] = useState(false);
  

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#575C61" : "#ADD3FE";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="Digite seu nome"
        />
              
            
        </View>

        <View style={styles.rowInput}>
        <TextInput
          keyboardType="numeric"
          style={styles.campo2}
          value={text}
          placeholder="Data"
        /> 
            <View >
              <View style={styles.area}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  
                /><Text style={styles.texto}>M</Text>

                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  
                /><Text style={styles.texto}>F</Text>
               
              </View>
              
            </View>
             
        
        </View>

        <View>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="Instituição"
        />
        </View>

        <View style={styles.rowInput}>
        <TextInput
          style={styles.campo2}
          value={text}
          placeholder="Curso"
        />
        <TextInput
          style={styles.campo2}
          value={text}
          placeholder="Módulo"
        />
        </View>

        <FlatList
          style={styles.lista}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

        <View style={styles.buttons}>
          <Button
            title="Enviar"
            
          />
          <Button
            title="Limpar"
            
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  rowInput: {
    flexDirection: "row",
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#33395C",
    opacity: '80%',
    fontSize: 20,
    color: "white",
    margin:5,
    borderRadius: 20,
    padding: 20,
    borderWidth: 4,
    padding: 10,
    borderColor:'#72D6FF'
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 25,
    width:260,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:15

  },
  campo2:{
    width: 150,
    height: 35,
    backgroundColor: "#33395C",
    opacity: '80%',
    fontSize: 20,
    color: "white",
    margin:4,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#72D6FF'
  },
  title: {
    fontSize: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  area:{
    width:150,
    height:45,
    borderWidth:3,
    borderColor:'#72D6FF',
    margin:4,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#33395C",
    opacity: '80%',
    flexDirection: "row",
    padding: 10
    
  },
  texto:{
    fontSize: 18,
    color: "white",
    letterSpacing:6
  },
  checkbox: {
    alignSelf: "center",
    marginHorizontal:8
  },
});

export default App;