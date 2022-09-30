import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import useJitStore from "../../../store/JitStore";
import SendJitButton from "../../buttons/SendJitButton";
import JitListItem from "./JitListItem";

const JitList = () => {
  const jits = useJitStore((state) => state.jits);
  const fetchJits = useJitStore((state) => state.fetchJits);
  const loading = useJitStore((state) => state.jitLoading);
  const error = useJitStore((state) => state.jitError);

  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <Text
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        Error: {error}
      </Text>
    );
  }

  useEffect(() => {
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
              backgroundColor: "#f3f4f6",
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
        onRefresh={() => {
          fetchJits();
        }}
        refreshing={loading}
      />
      <SendJitButton />
    </SafeAreaView>
  );
};

export default JitList;
