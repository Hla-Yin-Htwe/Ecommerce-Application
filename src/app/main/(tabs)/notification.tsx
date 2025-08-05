// import { View, Text, Button } from "react-native";
// import React from "react";
// import { useCounterStore } from "@/src/store/store";

// const notification = () => {
//   const count = useCounterStore((state) => state.count);
//   return <OtherComponent count={count} />;
// };
// const OtherComponent = ({ count }: { count: number }) => {
//   const increment = useCounterStore((state) => state.increment);
//   const decrement = useCounterStore((state) => state.decrement);

//   return (
//     // <View className="flex-1 items-center justify-center ">
//     //   <Text>Your Counter</Text>
//     //   <Text className="text-2xl font-bold">{count}</Text>
//     //   <View className="flex-row gap-2">
//     //     <Button title="Increment" onPress={increment} />
//     //     <Button title="Decrement" onPress={decrement} />
//     //     {/* <button onClick={() => console.log('Button clicked!')}>Click Me</button>   */}
//     //   </View>
//     //   <Text className="text-sm text-gray-500 mt-2">
//     //     This is a notification component
//     //   </Text>
//     // </View>
//     <View>
//       <Text>Hi</Text>
//     </View>
//   );
// };

// export default notification;
// Counter.tsx
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "@/src/store/counterSlice"
import type { RootState, AppDispatch } from "@/src/store/store"


const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 24 }}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Counter;

