import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';




type Props = NativeStackScreenProps<
  RootStackParamList,
  'BlogDetail'
>;

export default function BlogDetailScreen({ route }: Props) {
  const { blog } = route.params;

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Text>{blog.title}</Text>
      <Text>{blog.created_at}</Text>
    </View>
  );
}