import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{headerShown: false}}  />
      <Stack.Screen name="placeOrder/checkout" options={{ headerShown: false }} />
      <Stack.Screen name="placeOrder/payment" options={{headerShown:false}}/>
    </Stack>
  );
}
