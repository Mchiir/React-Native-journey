import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Student = {
  id: number;
  full_name: string;
  age: number
}

export default function Index() {
  const [students] = useState<Student[]>([
    { full_name: "Alice Thompson", age: 21, id: 1 },
    { full_name: "Brian Carter", age: 22, id: 2 },
    { full_name: "Chloe Ramirez", age: 24, id: 3 },
    { full_name: "David Foster", age: 23, id: 4 },
    { full_name: "Ella Nguyen", age: 20, id: 5 },
    { full_name: "Felix Morgan", age: 25, id: 6 },
    { full_name: "Grace Kim", age: 22, id: 7 },
    { full_name: "Henry Scott", age: 23, id: 8 },
    { full_name: "Isabella Lopez", age: 24, id: 9 },
    { full_name: "Jack Turner", age: 25, id: 10 },
    { full_name: "Kylie Brooks", age: 21, id: 11 },
    { full_name: "Liam Bennett", age: 22, id: 12 },
    { full_name: "Maya Collins", age: 23, id: 13 },
    { full_name: "Noah Rivera", age: 24, id: 14 },
    { full_name: "Olivia Price", age: 20, id: 15 },
    { full_name: "Patrick Hughes", age: 25, id: 16 },
    { full_name: "Quinn Wallace", age: 22, id: 17 },
    { full_name: "Ruby Mitchell", age: 21, id: 18 },
    { full_name: "Samuel Perry", age: 23, id: 19 },
    { full_name: "Tessa Adams", age: 24, id: 20 },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f2f2f2",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4
    },
    name: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 4,
    },
    detail: {
      fontSize: 14,
      color: "#555",
    },
  });
  
  return (

    <View>
      <ScrollView style={styles.container}>
        {students.map((student) => (
          <View key={student.id} style={styles.card}>
            <Text style={styles.name}>{student.full_name}</Text>
            <Text>Age {student.age}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
