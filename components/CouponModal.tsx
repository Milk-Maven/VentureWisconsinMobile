import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONT_SIZE } from "../utils/consts";

export const CouponModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 2 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Display this to the bartender or server
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> Use coupon</Text>
            </Pressable>
            <Text style={{ fontSize: FONT_SIZE.SMALL, marginTop: 15 }}>
              Coupons can only be used once
            </Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={{ flex: 2, borderLeftWidth: 1 }}
        onPress={() => {
          console.log("in");
          setModalVisible(true);
        }}
      >
        <MaterialIcons
          name="description"
          style={{
            textAlign: "center",
            borderColor: COLORS.GREY,
          }}
          size={25}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>coupon</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: FONT_SIZE.MEDIUM,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CouponModal;
