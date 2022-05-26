import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput, Button, Pressable  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View>
          <Text style={styles.header}>Welcome to Facebook</Text>
          <Image style={styles.banner} source={require('./assets/facebook-banner.jpg')} />
          <StatusBar style="auto" />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name or Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Login Here"
            onPress={() => alert('Coming Soon ')}
          />
        </View>

        <View>
          <Text style={styles.info}>
            Are you new here?
            <Pressable onPress={()=> alert("Coming soon")}>
              <Text style={styles.link}> Sign Up</Text>
            </Pressable>
          </Text>
        </View>

        <View>
          <Text style={styles.footer}>
            Facebook is a place to connect and share with the world.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
  },

  header: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    color: '#3b5998',
  },

  banner: {
    width: 400,
    height: 200,
  },

  input: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 0.2,
    padding: 10,
    borderColor: 'gray',
  },

  button: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  info: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
    color: '#3b5998',
  },

  link: {
    color: '#3b5998',
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
    color: '#3b5998',
  },

});
