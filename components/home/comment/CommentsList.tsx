import { FlashList } from "@shopify/flash-list";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import useCommentStore from "../../../store/CommentStore";
import CommentListItem from "./CommentListItem";

const CommentsList = () => {
  const comments = useCommentStore((state) => state.comments);
  const loading = useCommentStore((state) => state.commentsLoading);
  const error = useCommentStore((state) => state.commentsError);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ActivityIndicator size="small" />
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

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
        borderTopColor: "#f3f4f6",
        borderTopWidth: 0.5,
      }}
    >
      <FlashList
        data={comments}
        renderItem={({ item }) => <CommentListItem {...item} />}
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
      />
    </View>
  );
};

export default CommentsList;
