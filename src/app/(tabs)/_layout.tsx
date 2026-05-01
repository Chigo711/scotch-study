import { Redirect, Stack } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@clerk/expo";

const TabsLayout = () => {

  const {isSignedIn, isLoaded} = useAuth();

  if(!isSignedIn){
    return <Redirect href="/(auth)" />
  }

  if (!isLoaded) {
    return null;
  }
  return (
    <NativeTabs 
      backgroundColor="#1c1c28"
      shadowColor="#2d2d3a"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Chats</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="chatbubbles" />} selectedColor={"#6c5ce7"} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="compass" />} selectedColor={"#6c5ce7"} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="person" />} selectedColor={"#6c5ce7"} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabsLayout;
