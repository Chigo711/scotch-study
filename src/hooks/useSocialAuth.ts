import { useState } from "react";
import { useSSO } from "@clerk/expo";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_apple" | "oauth_github",
  ) => {
    if (loadingStrategy) return; // Prevent multiple clicks / concurrent flows

    setLoadingStrategy(strategy);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (!createdSessionId || !setActive) {
        const provider =
          strategy === "oauth_google"
            ? "Google"
            : strategy === "oauth_apple"
              ? "Apple"
              : "GitHub";

        Alert.alert(
          "Authentication Failed",
          `Failed to authenticate with ${provider}. Please try again.`,
        );
        throw new Error(
          `Failed to authenticate with ${provider}. Please try again.`,
        );
      }
      await setActive({ session: createdSessionId });
    } catch (error) {
      console.error(`Error during ${strategy} authentication:`, error);
    } finally {
      setLoadingStrategy(null);
    }
  };
  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;
