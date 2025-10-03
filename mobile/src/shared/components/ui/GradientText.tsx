import React from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "shared/styles/colors";
    
const GradientText = (props: React.ComponentProps<typeof Text>) => {
  return (
    <MaskedView 
      maskElement={<Text {...props} />}
      style={{ 
        flex: 1,
        alignSelf: 'flex-start',
      }}
    >
      <LinearGradient
        colors={colors.gradient.colors}
        locations={colors.gradient.locations}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text allowFontScaling={false} {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;