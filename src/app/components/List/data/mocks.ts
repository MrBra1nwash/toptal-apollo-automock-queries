import { GET_CHARACTERS } from "./get-characters";

export const createGetCharactersMock = () => ({
  request: {
    query: GET_CHARACTERS,
  },
  result: {
    data: {
      characters: {
        results: [
          { id: "1", name: "First Name" },
          { id: "2", name: "Second Name" },
        ],
      },
    },
  },
});
