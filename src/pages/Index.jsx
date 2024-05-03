import { Box, Checkbox, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const movies = [
  { id: 1, title: "The Shawshank Redemption", year: 1994 },
  { id: 2, title: "The Godfather", year: 1972 },
  { id: 3, title: "The Godfather: Part II", year: 1974 },
  { id: 4, title: "The Dark Knight", year: 2008 },
  { id: 5, title: "12 Angry Men", year: 1957 },
  // Add more movies to complete the top 100 list
];

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box p={5} bg={bg} minH="100vh">
      <Heading mb={4} textAlign="center" color={color}>Top 100 IMDB Films Tracker</Heading>
      <Stack spacing={3} maxW="600px" mx="auto">
        {movies.map(movie => (
          <Flex key={movie.id} p={3} bg="gray.100" borderRadius="md" align="center" justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">{movie.title} ({movie.year})</Text>
            <Checkbox colorScheme="green" />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;