import { useQuery, gql } from "@apollo/client";

interface Character {
  id: number;
  name: string;
}

interface CharactersData {
  character: Character;
}

export const GET_CHARACTER = gql`
  query GetCharacter {
    character(id: 1) {
      id
      name
    }
  }
`;

export const useGetCharacter = () => useQuery<CharactersData>(GET_CHARACTER);
