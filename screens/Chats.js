import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from "./components/ContactRow";
import Separator from "./components/Separtor";

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContactRow
        name="Şükrü Güngör"
        subtitle="React Native Course"
        onPress={() => {
          alert("merhaba hasan genç");
        }}
      />
      <Separator />
      <ContactRow
        name="Hasan Genç"
        subtitle="Lorem İpsum"
        onPress={() => {
          alert("merhaba şükrü güngör");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chats;
