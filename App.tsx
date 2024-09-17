import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import games from './src/data/games';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text) {
      const filtered = games.filter(game =>
        game.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Game Listing App</Text>
        <TextInput
          style={styles.input}
          placeholder="Search games..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {/* Game list*/}
      <FlatList
        data={filteredGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameCard}>
            <Text style={styles.gameTitle}>{item.name}</Text>
          </View>
        )}
      />
    {/* Footer */}
    <View style={styles.footer}>
        <Text>09/2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  gameCard: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
});
