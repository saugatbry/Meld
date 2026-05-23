import { useState } from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { musicApi } from '@/api/musicApi';

export function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ id: string; title: string }>>([]);

  const onQuery = async (text: string) => {
    setQuery(text);
    setResults((await musicApi.search(text)).map(({ id, title }) => ({ id, title })));
  };

  return (
    <View className="flex-1 bg-ink pt-16 px-4">
      <TextInput value={query} onChangeText={onQuery} placeholder="Search tracks, moods, anime OST" placeholderTextColor="#71717a" className="bg-white/10 rounded-2xl px-4 py-3 text-white" />
      <ScrollView className="mt-4">{results.map((r) => <Text className="text-white py-3" key={r.id}>{r.title}</Text>)}</ScrollView>
    </View>
  );
}
