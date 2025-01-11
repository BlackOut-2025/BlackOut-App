import WebView from 'react-native-webview';

const PUBLIC_API_URI =
  process.env.EXPO_PUBLIC_API_URI ?? 'https://localhost:5173';

export default function Index() {
  return (
    <WebView
      source={{
        uri: PUBLIC_API_URI,
      }}
    />
  );
}
