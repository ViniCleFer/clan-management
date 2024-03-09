import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

// import {} from '@/';

export default function Home() {
  const [members, setMembers] = useState<any[]>([]);
  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('clans/%232YUOLPOYO/members');

      if (response.status === 200) {
        setMembers(response?.data?.items);
      }
    }

    loadMembers();
  }, []);

  return (
    <View className='flex-1 bg-gray-800 items-center justify-center'>
      <Text className='text-white'>Home</Text>

      {members &&
        members?.map((m: any) => (
          <Text className='text-white' key={m?.name}>
            {m?.name}
          </Text>
        ))}
    </View>
  );
}
