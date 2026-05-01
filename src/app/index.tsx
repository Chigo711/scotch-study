import { Text, View, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
export default function Home() {
  const { isSignedIn , signOut} = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }
  return (
    <View style={styles.container}>
      <Text className="text-red-400">
        Edit src/app/index.tsx to edit this screen.
      </Text>

      <Pressable onPress={() => signOut()} className="bg-primary px-4 py-2 rounded-lg items-center justify-center">
        <Text className="text-white">Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
