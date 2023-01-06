import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { containerStyles } from "../utils/consts";
export const AdminListing = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text>Create Location</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="address"
        onChangeText={setAddress}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="category"
        onChangeText={setCategory}
        value={category}
      />

      <TextInput
        style={styles.input}
        placeholder="description"
        onChangeText={setDescription}
        value={description}
      />

      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="phone"
        onChangeText={setPhone}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="website"
        onChangeText={setWebsite}
        value={website}
      />
      <Pressable style={styles.button} onPress={() => {}} disabled={isDisabled}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    // backgroundColor: "blue",
    width: 50,
    color: "orange",
    marginHorizontal: "auto",
  },
  container: {
    width: "100%",
    display: "flex",
    height: 20,
    justifyContent: "center",
    alignContent: "center",
  },
});
