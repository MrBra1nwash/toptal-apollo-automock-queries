import React, { FC } from "react";
import { useGetCharacters } from "./data/get-characters";

const List: FC = () => {
  const { data, loading } = useGetCharacters();
  console.log("data", data);

  if (loading) return <div>Loading</div>;

  return (
    <h1>
      {data?.characters.results.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </h1>
  );
};

export default List;
