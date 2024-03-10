import { View, Text } from 'react-native';

import { Member } from '@/services/requests/clan/types';

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  const { name } = member;
  return (
    <View className=' px-2 py-1 my-2 flex bg-gray-900 items-center justify-center border-[1px] rounded-md border-gray-600'>
      <Text className='text-white'>{name}</Text>
    </View>
  );
}
