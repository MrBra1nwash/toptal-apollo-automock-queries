import { GET_ROCKET_INVENTORY } from "./get-characters";

export const createGetCharactersMock = () => ({
  request: {
    query: GET_ROCKET_INVENTORY,
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
