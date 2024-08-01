import { Box, Center, Text } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={2}>
      <Text fontSize="4xl" color="#00ff00" fontWeight="bolder" mb={0} textAlign="center">
        Arnab's IDE
      </Text>
      <CodeEditor />
    </Box>
  );
}

export default App;
