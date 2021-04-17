import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import List from "./List";
import { createGetCharactersMock } from "./data/mocks";

const arrangeTest = (mocks: MockedResponse[]) =>
  render(
    <MockedProvider mocks={mocks}>
      <List />
    </MockedProvider>
  );

describe("List", () => {
  it("renders loader", () => {
    arrangeTest([createGetCharactersMock()]);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders items", async () => {
    arrangeTest([createGetCharactersMock()]);
    expect(await screen.findByText("First Name")).toBeInTheDocument();
    expect(await screen.findByText("Second Name")).toBeInTheDocument();
  });
});
