import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z, ZodError } from "zod";

export interface FormGroupProps<T> {
  formDefaultValue: T;
  formKeys: Array<keyof T>;
  formValidator: z.ZodObject<any>;
  onSubmit: any;
}
export const FormGroup = <T extends Object>({
  formDefaultValue,
  formKeys,
  formValidator,
  onSubmit,
}: FormGroupProps<T>) => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const clear = () => {
    Object.keys(formState).forEach((key) => {
      formState[key].set("");
    });
  };
  useEffect(() => {
    if (!formDefaultValue) {
      return;
    }
    Object.keys(formState).forEach((key) => {
      const defaultValue = (formDefaultValue as any)[key];
      formState[key].set(defaultValue);
    });
  }, [formDefaultValue]);

  const formState = formKeys.reduce<{
    [key: string]: {
      get: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
  }>((previous, current) => {
    const [get, set] = React.useState("");
    previous = {
      ...previous,
      [current]: { get, set },
    };
    return previous;
  }, {});

  const [createdId, setCreatedId] = React.useState(0);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(formState).map((input, i) => {
          return (
            <View key={i}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingHorizontal: 12,
                }}
              >
                <Text style={styles.inputText} key={`${i}text`}>
                  {input}
                </Text>
                <Text style={{ color: "red" }}>{formErrors[input]}</Text>
              </View>
              <TextInput
                key={`${i}input`}
                style={styles.input}
                onChangeText={formState[input].set}
                value={formState[input].get}
              />
            </View>
          );
        })}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "#FAF43D",
            }}
            onPress={async () => {
              clear();
            }}
          >
            <Text style={styles.buttonText}>clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
            }}
            onPress={async () => {
              try {
                console.log("in");
                const formValues = Object.keys(formState).reduce(
                  (prev, curr) => {
                    return { ...prev, [curr]: formState[curr].get };
                  },
                  {}
                );
                const parsedPayload = formValidator.parse(formValues) as T;
                console.log(parsedPayload);
                onSubmit(parsedPayload);
              } catch (e) {
                console.log(e);
                if (e instanceof ZodError) {
                  const errors = e.errors.reduce((prev, curr) => {
                    return { ...prev, [curr.path[0]]: curr.message };
                  }, {});
                  setFormErrors(errors);
                }
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
    // paddingLeft: 13,
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
    paddingBottom: 280,
    paddingTop: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});

export const listingSchema = z.object({
  address: z.string().min(1),
  attributes: z.string().optional(),
  category: z.string().optional(),
  city: z.string().min(1),
  description: z.string().min(1),
  displayTitle: z.string().min(1),
  email: z.string().email().min(1),
  image1: z.string().min(1),
  image2: z.string().min(1).optional().nullable(),
  image3: z.string().min(1).optional().nullable(),
  image4: z.string().min(1).optional().nullable(),
  name: z.string().min(1),
  phone: z.string().min(10),
  subTitle: z.string().optional(),
  website: z.string().min(1),
  zipcode: z.string().min(5),
});
