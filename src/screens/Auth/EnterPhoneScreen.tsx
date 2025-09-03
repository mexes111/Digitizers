import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { Typography } from "../../components/typography/Typography";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SimpleCountryPicker } from "../../components/inputs/SimpleCountryPicker";
import { CurvedLineBackground } from "../../components/layout/CurvedLineBackground";
import { startPhoneSignIn } from "../../lib/authClient";

interface EnterPhoneScreenProps {
  navigation: any;
}
interface Country {
  code: string;
  name: string;
  flag: string;
  callingCode: string;
}

export const EnterPhoneScreen: React.FC<EnterPhoneScreenProps> = ({
  navigation,
}) => {
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: "NG",
    name: "Nigeria",
    flag: "🇳🇬",
    callingCode: "+234",
  });

  const onlyDigits = (s: string) => s.replace(/\D/g, "");

  const buildE164 = () => {
    const digits = onlyDigits(phone);
    const cc = onlyDigits(selectedCountry.callingCode);
    // Ensure we don't double prefix '0' for local patterns; strip leading 0 if present
    const local = digits.replace(/^0+/, "");
    return `+${cc}${local}`;
  };

  const handleSendOTP = async () => {
    const digits = onlyDigits(phone);
    if (digits.length < 7) {
      Alert.alert("Invalid number", "Please enter a valid phone number.");
      return;
    }
    const e164 = buildE164();
    try {
      setBusy(true);
      const confirmation = await startPhoneSignIn(e164);
      navigation.navigate("VerifyOTP", { phoneNumber: e164, confirmation });
    } catch (e: any) {
      Alert.alert("Failed to send OTP", e?.message ?? String(e));
    } finally {
      setBusy(false);
    }
  };

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000000", paddingHorizontal: 20 },
    backButton: {
      width: 34,
      height: 34,
      backgroundColor: "#1C1C1E",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
    content: { flex: 1, justifyContent: "space-between" },
    headerSection: { flex: 1, marginTop: 50 },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginBottom: 8,
    },
    subtitle: { fontSize: 14, color: "#8E8E93", lineHeight: 22 },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1C1C1E",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#38383A",
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginTop: 40,
    },
    phoneInput: { flex: 1, fontSize: 16, color: "#FFFFFF", marginLeft: 12 },
    buttonContainer: { paddingBottom: 50 },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <CurvedLineBackground />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          resizeMode="contain"
          style={{ height: 15, width: 15 }}
          source={require("../../assets/Icon.png")}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Typography style={styles.title}>Enter your phone number</Typography>
          <Typography style={styles.subtitle}>
            We'll send you a verification code to get started securely
          </Typography>

          <View style={styles.inputContainer}>
            <SimpleCountryPicker
              selectedCountry={selectedCountry}
              onCountrySelect={setSelectedCountry}
            />
            <TextInput
              style={styles.phoneInput}
              value={phone}
              onChangeText={setPhone}
              placeholder="812 345 6789"
              placeholderTextColor="#8E8E93"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={busy ? "Sending…" : "Send OTP"}
            onPress={handleSendOTP}
            disabled={busy}
          />
        </View>
      </View>
    </View>
  );
};
