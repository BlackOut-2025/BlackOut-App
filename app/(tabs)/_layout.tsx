import IconSmartHome from '@/assets/svgs/Home'
import IconSearch from '@/assets/svgs/IconSearch'
import IconTicket from '@/assets/svgs/IconTicket'
import IconUser from '@/assets/svgs/IconUser'
import { Tabs } from 'expo-router'
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        tabBarStyle: { backgroundColor: '#F6F6F6', paddingTop: 12 },
        tabBarActiveTintColor: '#212529',
        tabBarInactiveTintColor: '#ADB5BD',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{ title: '홈', tabBarIcon: ({ color }) => <IconSmartHome color={color} /> }}
      />
      <Tabs.Screen
        name="(search)"
        options={{ title: '검색', tabBarIcon: ({ color }) => <IconSearch color={color} /> }}
      />
      <Tabs.Screen
        name="(my-ticket)"
        options={{ title: '마이티켓', tabBarIcon: ({ color }) => <IconTicket color={color} /> }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{ title: '프로필', tabBarIcon: ({ color }) => <IconUser color={color} /> }}
      />
    </Tabs>
  )
}

export default TabLayout
