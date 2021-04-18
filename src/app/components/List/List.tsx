import React, { FC } from "react";
import { useGetCharacter } from "./data/get-character";

const List: FC = () => {
  const { data, loading } = useGetCharacter();
  console.log("data", data);

  if (loading) return <div>Loading</div>;

  return <h1>{data?.character.name}</h1>;
};

export default List;
