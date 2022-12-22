import { FlashList } from "@shopify/flash-list";
import React from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import useJitStore from "../../../store/JitStore";
import SendJitButton from "../../buttons/SendJitButton";
import JitListItem from "./JitListItem";

const JitList = () => {
  const jits = useJitStore((state) => state.jits);
  const fetchJits = useJitStore((state) => state.fetchJits);
  const loading = useJitStore((state) => state.jitLoading);
  const error = useJitStore((state) => state.jitError);

  {
    loading && (
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

  {
    error && (
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
              height: 0.5,
              backgroundColor: "#cbd5e1",
            }}
          ></View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
        onRefresh={() => {
          console.log("refreshing");
          fetchJits();
        }}
        refreshing={loading}
        onEndReachedThreshold={0.25}
        onEndReached={() => {
          console.log("end reached");
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fef3de",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#67635b",
                }}
              >
                Wow. You reached the bottom!
              </Text>
            </View>
          );
        }}
      />
      <SendJitButton />
    </SafeAreaView>
  );
};

export default JitList;
