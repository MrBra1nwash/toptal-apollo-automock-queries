import { useQuery, gql } from "@apollo/client";
interface Character {
  id: number;
  name: string;
}

interface CharactersData {
  characters: {
    results: Character[];
  };
}

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        name
        id
      }
    }
  }
`;

export const useGetCharacters = () => useQuery<CharactersData>(GET_CHARACTERS);
