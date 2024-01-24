import { Button } from "react-native";
import { Stack, useRouter} from 'expo-router';



<Stack.Screen
name="modal"
options={{
    presentation: 'modal',
    headerLeft: ()=> <Button title="close" onPress={()=> router.back()}/>
}}
/>