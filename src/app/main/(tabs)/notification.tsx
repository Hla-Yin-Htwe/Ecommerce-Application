import { View, Text, Button } from 'react-native'
import React from 'react'
import { useCounterStore } from '@/src/store/store'

const notification = () => {
  const count=useCounterStore((state) => state.count);
  return (<OtherComponent count={count} />);
  
}
const OtherComponent = ({ count }:{count:number}) => {
    const increment=useCounterStore((state)=>state.increment);
      const decrement=useCounterStore((state)=>state.decrement);


  return (
    <View className='flex-1 items-center justify-center '>
<Text>Your Counter</Text>      
<Text className='text-2xl font-bold'>{count}</Text>
      <View className='flex-row gap-2'>
      <Button title='Increment' onPress={increment}/>
      <Button title='Decrement' onPress={decrement}/>
      {/* <button onClick={() => console.log('Button clicked!')}>Click Me</button>   */}
      </View>
      <Text className='text-sm text-gray-500 mt-2'>This is a notification component</Text>
      
    </View>
  )
}

export default notification