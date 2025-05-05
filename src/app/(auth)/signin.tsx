// screens/SignInScreen.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";
import SocialLoginButtons from "@/src/app/components/auth/SocialLoginButtons";
import { API_URL } from "../AuthContext/AuthContext";
import axios from "axios";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

export const SignInScreen = () => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const storeToken = async (token: string) => {
    try {
      if (Platform.OS === "web") {
        localStorage.setItem("accessToken", token);
      } else {
        await SecureStore.setItemAsync("accessToken", token);
      }
    } catch (err) {
      console.error("토큰 저장 실패:", err);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setError("모든 필드를 입력해주세요");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await axios.post(`${API_URL}/login`, {
        memberEmail: email,
        memberPassword: password,
      });

      setAuthState({
        token: result.data.accessToken,
        authenticated: true,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.accessToken}`;

      await storeToken(result.data.accessToken);
      router.replace("/(tabs)");
    } catch (err) {
      setError("로그인 실패. 이메일과 비밀번호를 확인해주세요.");
      console.error("로그인 에러:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
        <Text style={styles.top}>로그인</Text>
      </View>

      <Text style={styles.title}>다시 오신 것을 환영합니다</Text>
      <Text style={styles.subtitle}>계속하시려면 로그인해주세요</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="이메일을 입력해주세요"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={() => handleLogin(email, password)}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "로그인 중..." : "로그인"}
        </Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>SNS 계정으로 로그인</Text>
        <View style={styles.dividerLine} />
      </View>

      <SocialLoginButtons />

      <View style={styles.footer}>
        <Text style={styles.footerText}>계정이 없으신가요? </Text>
        <Link href={"/signup"} asChild>
          <Text style={styles.footerLink}>회원가입</Text>
        </Link>
      </View>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    top: -100,
    padding: 10,
    zIndex: 1,
  },
  backButton: {},
  top: {
    fontSize: 22,
    position: "relative",
    left: 110,

    fontWeight: "500",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 16,
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
  error: {
    color: "#FF3B30",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    height: 52,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
  },
  button: {
    height: 52,
    backgroundColor: "#FF385C",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    shadowColor: "#FF385C",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    color: "#FF385C",
    textAlign: "center",
    marginBottom: 24,
    fontSize: 14,
    fontWeight: "500",
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
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
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

export default SignInScreen;
