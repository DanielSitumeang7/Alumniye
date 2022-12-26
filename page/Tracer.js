import * as React from 'react';
import {Text, View, Pressable} from 'react-native';

const Tracer = ({navigation}) => {
    return (
        <View className="container mx-auto my-auto content-center">
                <Text>Home</Text>
                {/* Pressable anggap tag button kalo ada child */}
                <Pressable onPress={() => navigation.navigate('Tracer')}>
                    <Text className="font-bold text-lg">Tracer</Text>
                </Pressable>
            </View>
    );
}

export default Tracer;