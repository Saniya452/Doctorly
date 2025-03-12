import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import Button from "@/components/button";
import { router } from "expo-router";

const Diagnosis = () => {
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState("Our AI-generated diagnosis will appear here.");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.diagnosisContainer}>
      <Text style={styles.header}>Diagnosis</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#4CAF50" />
        ) : (
          <Text style={styles.diagnosisText}>{diagnosis}</Text>
        )}
        <Button title="Back to Questions" onPress={() => router.push("/(tabs)/generalQues")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#d3f5d5",
    margin: 0,
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#333",
  },
  diagnosisContainer: {
    width: "102%",
    maxWidth: 400,
    marginTop:150,
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
  diagnosisText: {
    fontSize: 18,
    marginBottom:50,
    marginTop:50,

    color: "#333",
    textAlign: "center",
  },
});

export default Diagnosis;
