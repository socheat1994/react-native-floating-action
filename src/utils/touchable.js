import {  } from "react-native";
import {
  Platform,
  TouchableNativeFeedback as iOSTouchableNativeFeedback,
  TouchableOpacity as iOSTouchableOpacity
} from "react-native";
import {TouchableNativeFeedback as AndroidTouchableNativeFeedback, TouchableOpacity as AndroidTouchableOpacity  } from "react-native-gesture-handler";

import { shadeColor } from "./color";

export function getTouchableComponent(useNativeFeedback = true) {
  if (useNativeFeedback === true && Platform.OS === "android") {
    return Platform.OS === "android" ? AndroidTouchableNativeFeedback : iOSTouchableNativeFeedback;
  }
  return Platform.OS === "android" ? AndroidTouchableOpacity : iOSTouchableOpacity;
}

export function getRippleProps(color, useNativeFeedback = true) {
  // less than API 21 don't support Ripple
  if (
    useNativeFeedback === true &&
    Platform.OS === "android" &&
    Platform.Version >= 21
  ) {
    return {
      background: Platform.OS === "android" ? AndroidTouchableNativeFeedback.Ripple(shadeColor(color, -30), true) : iOSTouchableNativeFeedback.Ripple(shadeColor(color, -30), true)
    };
  }
  return {};
}
