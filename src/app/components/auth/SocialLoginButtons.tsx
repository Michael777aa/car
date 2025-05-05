// src/components/auth/SocialLoginButtons.tsx
import { View, StyleSheet } from "react-native";
import React from "react";
import GoogleLoginButton from "./OAuth/GoogleAuth";
import NaverLoginButton from "./OAuth/Naver.Auth";
import KakaoLoginButton from "./OAuth/KakaoAuth";

const SocialLoginButtons = () => {
  return (
    <View style={styles.container}>
      <NaverLoginButton />
      <KakaoLoginButton />
      <GoogleLoginButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
    marginTop: 20,
  },
});

export default SocialLoginButtons;
