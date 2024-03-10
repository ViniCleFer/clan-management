import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { Loading } from '@/components/Loading';
import { MemberCard } from '@/components/MemberCard';

import { Member } from '@/services/requests/clan/types';
import { getClansMembersByClanTagRequest } from '@/services/requests/clan';

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMembers() {
      setLoading(true);
      try {
        const response = await getClansMembersByClanTagRequest('%232YUOLPOYO');

        if (response.status === 200) {
          setMembers(response?.data?.items);
        }
      } catch (error) {
        console.log('Error loadMembers =>', error);
      } finally {
        setLoading(false);
      }
    }

    loadMembers();
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-gray-800 items-center justify-center p-3'>
      <Text className='text-white mb-2'>Membros</Text>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={members}
          keyExtractor={(item) => item.tag}
          renderItem={({ item }) => <MemberCard member={item} />}
          className='flex-1 w-full h-full bg-gray-800 px-3'
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
