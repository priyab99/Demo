import { Tabs } from 'expo-router';

export default ()=>{
    return(
        <Tabs>
            <Tabs.Screen
            name="posts"
            options={{
                tabBarLabel: 'List',
                headerTitle: "Home Screen",
            
            }}
            />
             <Tabs.Screen
            name="profile"
            options={{
                tabBarLabel: 'Accout',
                headerTitle: "My Account",
            
            }}
            />
        </Tabs>
    )
};
