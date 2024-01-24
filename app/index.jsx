import {useRouter, Link} from 'expo-router'
import { Pressable, View, Text } from 'react-native';

const LoginPage = () => {

    const handleLogin=()=>{
        //handling login logic here

        router.replace('/posts')
    }

    const router=useRouter();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

       <Pressable onPress={handleLogin}>
        <Text>Login</Text>
       </Pressable>

       <Link href="/register" asChild>
       <Pressable>
        <Text>Create Accout</Text>
       </Pressable>
       </Link>


    
        </View>
    );
};

export default LoginPage;