// screens/SignUpScreen.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SocialLoginButtons from "@/src/app/components/auth/SocialLoginButtons";

export const SignUpScreen = () => {
  const navigateToDashboard = () => {
    router.navigate("/(tabs)");
  };

  return (
    <View style={styles.container}>
      {/* 헤더 뒤로가기 버튼 */}
      <View style={styles.header}>
        <Pressable onPress={navigateToDashboard} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
      </View>



      <Text style={styles.title}>회원가입</Text>
      <Text style={styles.subtitle}>모던워시에 오신 것을 환영합니다</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          SNS 계정으로 간편하게 가입하세요{'\n'}
          가입 후 다양한 서비스를 이용하실 수 있습니다
        </Text>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>SNS 계정으로 가입</Text>
        <View style={styles.dividerLine} />
      </View>

      <SocialLoginButtons  />

     

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    padding: 8,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  infoText: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#999",
    fontSize: 14,
    fontWeight: "500",
  },
  termsContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  termsText: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
  termsLink: {
    color: "#FF385C",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  footerText: {
    color: "#666",
    fontSize: 14,
  },
  footerLink: {
    color: "#FF385C",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default SignUpScreen;