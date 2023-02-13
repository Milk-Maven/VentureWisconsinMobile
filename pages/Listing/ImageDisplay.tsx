import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../utils/consts";
export const ImageDisplay: React.FC<{ images: (string | null)[] }> = ({
  images,
}) => {
  const [imageWidth, setImageWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [displayImages, setDisplayImages] = useState<any[]>([]);

  useEffect(() => {
    setImageWidth(Dimensions.get("window").width - 100);
    const imagesToDisplay = images
      .filter((image) => image !== null)
      .map((image) => {
        return (
          <Image
            progressiveRenderingEnabled={true}
            defaultSource={require("./missing-image.jpeg")}
            style={{ borderRadius: 15 }}
            source={{
              width: imageWidth,
              height: imageWidth,
              uri: image ?? require("./missing-image.jpeg"),
            }}
          />
        );
      });
    setDisplayImages(imagesToDisplay);
  }, []);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={{}}
        onPress={() => {
          const nextImage = selectedImage - 1;
          nextImage === -1
            ? setSelectedImage(displayImages.length - 1)
            : setSelectedImage(nextImage);
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          style={{}}
          size={40}
          color={COLORS.SECONDARY_RED}
        />
      </Pressable>
      {displayImages[selectedImage]}
      <Pressable
        onPress={() => {
          console.log(selectedImage);
          const nextImage = selectedImage + 1;
          nextImage === displayImages.length
            ? setSelectedImage(0)
            : setSelectedImage(nextImage);
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-right"
          style={{ textAlign: "right" }}
          size={40}
          color={COLORS.SECONDARY_RED}
        />
      </Pressable>
    </View>
  );
};
