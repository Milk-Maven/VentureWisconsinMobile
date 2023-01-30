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

export interface FormGroupProps<T> {
  listingToUpdate?: T;
  formKeys: Array<keyof T>;
  formValidator: z.ZodObject<any>;
  onSubmit: any;
}
export const FormGroup = <T extends Object>({
  listingToUpdate,
  formKeys,
  formValidator,
  onSubmit,
}: FormGroupProps<T>) => {
  const resetForm = () => {
    Object.keys(formState).forEach((key) => {
      formState[key].set("");
    });
  };
  useEffect(() => {
    if (!listingToUpdate) {
      resetForm();
      return;
    }
  }, [listingToUpdate]);

  const formState = formKeys.reduce<{
    [key: string]: {
      get: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
  }>((previous, current) => {
    const [get, set] = React.useState("");
    current;
    previous = { ...previous, [current]: { get, set } };
    return previous;
  }, {});

  const [createdId, setCreatedId] = React.useState(0);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(formState).map((input, i) => {
          return (
            <>
              <Text style={styles.inputText} key={`${i}text`}>
                {input}
              </Text>

              <TextInput
                key={`${i}input`}
                style={styles.input}
                onChangeText={formState[input].set}
                value={formState[input].get}
              />
            </>
          );
        })}

        <View>
          <Text style={{ textAlign: "center" }}>listingID: {createdId} </Text>
        </View>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: "#FAF43D",
          }}
          onPress={async () => {
            resetForm();
          }}
        >
          <Text style={styles.buttonText}>reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
          }}
          onPress={async () => {
            try {
              const formValues = Object.keys(formState).reduce((prev, curr) => {
                return { ...prev, [curr]: formState[curr].get };
              }, {});
              console.log(formValues);

              const parsedPayload = formValidator.parse(formValues);

              console.log("here");
              const res = onSubmit(parsedPayload as T);
              console.log("res", res);

              resetForm();
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      ></View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    paddingTop: 0,
  },
  inputText: {
    paddingLeft: 13,
    paddingBottom: 0,
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
    paddingBottom: 350,
    paddingTop: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});
