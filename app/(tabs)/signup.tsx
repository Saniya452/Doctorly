import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "@/components/button";
import { router } from "expo-router";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SignUp Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
        />
        <Button
          title="SignUp with Google"
          onPress={() => alert("Signup Successful!")}
        />
        <Button title="SignUp" onPress={() => router.push("/(tabs)/login")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d3f5d5",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
});

export default SignupScreen;
