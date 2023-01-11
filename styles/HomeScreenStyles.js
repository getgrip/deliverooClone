import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
    },
    homeScreenImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#d3d3d3',
        // padding: 25
    },

    viewStyles: {
        flexDirection: 'row',
        paddingBottom: 12,
        alignItems: 'center',
        marginHorizontal: 16,
        marginLeft: 8, 
        justifyContent: 'space-between'

    }
});

export default HomeScreenStyles;