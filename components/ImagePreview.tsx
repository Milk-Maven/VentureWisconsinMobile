import React from "react";
import { Image, View } from "react-native";

export const ImagePreview: React.FC<{ imageURL: string; size?: number }> = ({
  imageURL,
  size = 50,
}) => {
  return (
    <Image
      progressiveRenderingEnabled={true}
      source={{
        uri: imageURL,
      }}
      style={{
        width: size,
        height: size,
        marginHorizontal: 10,
        borderRadius: 100,
      }}
    />
  );
};
