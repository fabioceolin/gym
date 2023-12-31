import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

import { Historycard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada Unilateral"],
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Historycard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontFamily="heading"
            fontSize="md"
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
