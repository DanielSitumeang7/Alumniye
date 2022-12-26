import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import Tomboltest from '../components/Home/Tombolnavigasi';

const Home = ({ navigation }) => {
    return (
        <>
        {/* View anggap tag div */}
            <View className="container mx-auto my-auto content-center">
                <Text>Home</Text>
                <Tomboltest navigasi={navigation}/>
                {/* Pressable anggap tag button kalo ada child */}
                <Pressable onPress={() => navigation.navigate('Tracer')}>
                    <Text className="font-bold text-lg">Tracer</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Search')}>
                    <Text className="font-bold text-lg">Search</Text>
                </Pressable>
            </View>

        </>
    );
}

export default Home;