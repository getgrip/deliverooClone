import { StyleSheet, Text, View, Image } from 'react-native'
import HomeScreenStyles from '../styles/HomeScreenStyles'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const img = require('../assets/foodDelivery.png');

const HomeScreen = () => {
    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={{ edges: 1 }}>
            <View style={styles.container}>
                <Image
                    source={img}
                    style={HomeScreenStyles.homeScreenImage}
                />
                <View style={{ marginLeft: 16 }}>
                    <Text style={{ fontSize: 18 }}>Deliver Now!</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Current location</Text>
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 12,
        alignItems: 'center',
        marginHorizontal: 16,
        marginLeft: 8,
    }




});


export default HomeScreen

