import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import games from './src/data/games';
import Footer from './src/components/Footer';

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
        data={filteredGames.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameCard}>
            <Image source={{ uri: item.image }} style={styles.gameImage} />
            <View style={styles.gameDetails}>
              <Text style={styles.gameTitle}>{item.name}</Text>
              <Text>Platform: {item.platform}</Text>
              <Text>Genre: {item.genre}</Text>
              <Text>Developer: {item.developer}</Text>
              <Text>Rating: {item.rating} (Score: {item.ratingScore})</Text>
              <Text>Release Date: {item.releaseDate}</Text>
            </View>
          </View>
        )}
      />
      <Footer />
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
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  gameImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  gameDetails: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
