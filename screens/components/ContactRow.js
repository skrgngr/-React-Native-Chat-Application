import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContactRow = ({ name, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarlabel}>
          {name.split(" ").reduce((prev, curent) => `${prev}${curent[0]}`, "")}
        </Text> 
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Ionicons name="chevron-forward-outline" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    marginStart: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "#2196f3",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarlabel: {
    fontSize: 20,
    color: "white",
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: "grey",
  },
  iconContainer: {
    marginLeft: "auto", // Bu, simgenin sağa yaslanmasını sağlar
  },
});

export default ContactRow;
