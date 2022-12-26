import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Pressable, Alert } from 'react-native';

const Tekan = () => {
    Alert.alert("Ajg sama kelen semua");
}

const TombolTest = () => {
    return (
    <>
        <Pressable onPress={Tekan}>
            <Ionicons name="home" size={24} color="black" />
        </Pressable>
    </>
    );
}

const Tombolnavigasi = ({ navigasi }) => {
    return(
        <>
            <View className="container mx-auto my-auto content-center">
                <Pressable onPress={() => navigasi.navigate('Home')}>
                    
                    <Ionicons name="home" size={24} color="black"></Ionicons>
                </Pressable>
                <Pressable onPress={() => navigasi.navigate('Tracer')}>
                    <Ionicons name="search" size={24} color="black"></Ionicons>
                </Pressable>
                <Pressable onPress={() => navigasi.navigate('Search')}>
                    <Ionicons name="chatbox" size={24} color="black"></Ionicons>
                </Pressable>
                <Pressable onPress={() => navigasi.navigate('Search')}>
                    <Ionicons name="notifications" size={24} color="black"></Ionicons>
                </Pressable>
            </View>
        </>
    );
}

export default Tombolnavigasi;