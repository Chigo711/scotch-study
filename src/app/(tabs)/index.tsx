import { Button,View, Text } from "react-native";
import React from "react";
import * as Sentry from "@sentry/react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
    </SafeAreaView>
  );
};

export default Home;
