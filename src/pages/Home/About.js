import React,{ useState } from 'react'
import { Text, View, NativeModules, Button, StyleSheet, Dimensions } from 'react-native'

const ReadXmlFile = NativeModules.ReadXmlModule;

const About=()=> {
    const [key, setKey] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.categoryHeader}>
                <Text style={styles.categoryHeaderTitle}>About Us</Text>
            </View>
            <Button title="Get Data" onPress={()=>{
                //ReadXmlFile.ShowMessage("Hello from react new!",2000)
                ReadXmlFile.getDeviceName((err ,name) => {
                    setKey("Service key: " + name);
                 });
            }}>
            </Button>
            <Text style={styles.ListHeaderTitle}>{key}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
    container: {
        alignItems: 'center',
    },
    categoryHeader: {
        backgroundColor: '#dadbdd',
        padding: 10,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    categoryHeaderTitle: {
        color: '#000',
        fontSize: 20,
    },

    ListHeaderTitle: {
        color: '#f2590c',
        fontSize: 22,
        fontWeight: '600'
    },
});

export default About
