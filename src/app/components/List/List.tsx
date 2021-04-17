import React, { FC } from "react";
import { useGetCharacters } from "./data/get-characters";

const List: FC = () => {
  const { data, loading } = useGetCharacters();
  console.log("data", data);
  if (loading) return <div>Loading</div>;
  return (
    <ul>
      {data?.characters.results.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default List;
