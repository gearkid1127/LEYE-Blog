import {Button, View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    BlogDetail: undefined;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({navigation}: Props) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>LEYE Home Screen </Text>

            <Button
                title="Go to Blog Detail"
                onPress={() => {
                    navigation.navigate('BlogDetail');
                }}
            />
        </View>
    )
}