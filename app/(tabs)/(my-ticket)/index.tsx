import WebView from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const PUBLIC_API_URI = process.env.EXPO_PUBLIC_API_URI ?? 'https://localhost:5173'

export default function Mypage() {
  const router = useRouter()
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#F6F6F6' }}
      edges={['top', 'left', 'right']} // bottom 제외
    >
      <WebView
        source={{
          uri: `${PUBLIC_API_URI}/my-ticket`,
        }}
        onNavigationStateChange={e => {}}
      />
    </SafeAreaView>
  )
}
