import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import useJitStore from "../../store/JitStore";
import SendJitButton from "../buttons/SendJitButton";
import JitListItem from "./JitListItem";

const JitList = () => {
  const jits = useJitStore((state) => state.jits);
  const setJits = useJitStore((state) => state.setJits);

  const loading = useJitStore((state) => state.jitLoading);
  const error = useJitStore((state) => state.jitError);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  useEffect(() => {
    setJits();
    console.log("jits", jits);
  }, []);

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <FlashList
        data={jits}
        renderItem={({ item }) => <JitListItem {...item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              paddingVertical: 0.5,
              backgroundColor: "#eee",
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
      />
      <SendJitButton />
    </SafeAreaView>
  );
};

export default JitList;
