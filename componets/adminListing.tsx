import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";
import { createUser } from "../utils/server";
export const AdminListing = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [createdId, setCreatedId] = React.useState("");
  const canSubmit = !!(
    name &&
    address &&
    category &&
    description &&
    email &&
    phone &&
    website
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          disabled={!canSubmit}
          style={{
            ...styles.button,
            backgroundColor: canSubmit ? "#FAF43D" : "#c4c4c4",
          }}
          onPress={async () => {
            const createListingSchema = z.object({
              name: z.string(),
              address: z.string(),
              category: z.string(),
              description: z.string(),
              email: z.string(),
              phone: z.string(),
              website: z.string(),
            });

            try {
              const parsedPayload = createListingSchema.parse({
                name,
                address,
                category,
                description,
                email,
                phone,
                website,
              });
              const res = await createUser(parsedPayload);
              setName("");
              setAddress("");
              setCategory("");
              setDescription("");
              setEmail("");
              setPhone("");
              setWebsite("");
              setCreatedId(res.id);
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>listingID: {createdId} </Text>
      </View>
    </ScrollView>
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
    backgroundColor: "#FAF43D",
    borderWidth: 1,
    borderColor: "#4a4a4a",
    borderRadius: 5,
    width: 80,
    height: 30,
    color: "#4a4a4a",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  buttonText: {
    textAlign: "center",
    color: "#4a4a4a",
  },
  container: {
    width: "100%",
    display: "flex",
    // height: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});
