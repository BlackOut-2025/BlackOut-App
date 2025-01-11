import WebView from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const PUBLIC_API_URI = process.env.EXPO_PUBLIC_API_URI ?? 'https://localhost:5173'

export default function Index() {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <WebView
        source={{
          uri: `${PUBLIC_API_URI}/`,
        }}
        onNavigationStateChange={e => {
          if (e.url.includes('my-ticket')) {
            router.push('/(tabs)/(my-ticket)')
          }
        }}
      />
    </SafeAreaView>
  )
}
