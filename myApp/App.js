import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Profile.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      </View>

<View style={styles.searchContainer}>
  <TextInput style={styles.searchInput} placeholder="Search" />
  <TouchableOpacity style={styles.filterButton}> 
    <Image source={require('./assets/Filter.jpg')} style={styles.filterIcon} /> 

