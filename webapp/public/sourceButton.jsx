import React from 'react'
import { TouchableOpacity, Text, Platform } from 'react-native';
import { Path, Svg, G } from "react-native-svg";
import { withNavigation } from 'react-navigation'

const CustomButton = ({ label = '', turn = "360", navigation = {}, screen = "", labelColor = '#fff', color = 'transparent', onPressFunc = null, fontSize = 32, decalagetext = "90", colorfill = '#FDC500', disabled = false }) => {

  const handlePress = () => {
    if (typeof onPressFunc === "function") {
      onPressFunc()
    } else {
      navigation.navigate(screen)
    }
  }
  const buttonPaddingTop = Platform.OS === 'ios' ? 10 : 0;
  return (
    <TouchableOpacity onPress={() => handlePress()}
      style={{ alignSelf: 'center', bottom: 0, opacity: disabled ? 0.3 : 1 }}
      disabled={disabled}
      activeOpacity={0.2}>
      <Svg
        height={100}
        width={350}
        style={{ marginLeft: 35, marginTop: 50 }}
      >
        <G
          rotation={turn}
          origin="165, 39">
          <Path
            d="M43.2791592,3.5 C40.0544477,3.5 37.1074306,5.32478241 35.6701474,8.21147275 L11.5481664,56.6589108 C10.9922563,57.7754201 10.6888692,59.0005889 10.6595302,60.2474924 C10.5491032,64.9406138 14.2641111,68.8346591 18.9572325,68.945086 L287.216538,75.2571015 C291.432985,75.3563125 295.084493,72.3487197 295.795003,68.1913844 L305.153668,13.4319309 C305.234511,12.9589056 305.27515,12.4798838 305.27515,12 C305.27515,7.30557963 301.46957,3.5 296.77515,3.5 L43.2791592,3.5 Z"
            fill={colorfill}
            stroke="#FFF"
            strokeWidth="6"
          />
        </G>
        <Text
          style={{
            paddingTop: buttonPaddingTop,
            paddingRight: 20,
            fontFamily: "Sedgwick",
            fontSize: fontSize,
            textAlign: 'center',
            color: labelColor,
            lineHeight: 60,
            textShadowOffset: { width: -1, height: 10 },
            textShadowRadius: 40,
          }}>
          {label}
        </Text>
      </Svg>
    </TouchableOpacity>
  )
}


export default withNavigation(CustomButton);