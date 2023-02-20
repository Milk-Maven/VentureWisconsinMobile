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
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../utils/consts";
import { camel2title } from "../utils/utils";

export interface FormGroupProps<T> {
  formDefaultValue: T;
  formKeys: Array<keyof T>;
  formValidator: z.ZodObject<any>;
  onSubmit: any;
  submitText?: string;
}

export const FormGroup = <T extends Object>({
  formDefaultValue,
  formKeys,
  formValidator,
  onSubmit,
  submitText = "submit",
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
                  {camel2title(input)}
                </Text>
                <Text style={{ color: "red" }}>{formErrors[input]}</Text>
              </View>
              <TextInput
                secureTextEntry={input === "password"}
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
            flex: 1,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.button,
            }}
            onPress={async () => {
              try {
                const formValues = Object.keys(formState).reduce(
                  (prev, curr) => {
                    return { ...prev, [curr]: formState[curr].get };
                  },
                  {}
                );
                const parsedPayload = formValidator.parse(formValues) as T;
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
            <Text style={styles.buttonText}>{submitText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
            }}
            onPress={async () => {
              clear();
            }}
          >
            <Text style={styles.buttonText}>clear</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingBottom: 0,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  button: {
    backgroundColor: COLORS.SECONDARY_RED,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 5,
    margin: 12,
    height: 40,
    display: "flex",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.X_BOLD,
  },
  container: {
    width: "100%",
    display: "flex",
    // paddingBottom: 280,
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
