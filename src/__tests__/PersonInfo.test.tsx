import React from "react";
import { fireEvent, render } from "@testing-library/react";
import PersonInfo from "../PersonInfo";

describe("<PersonInfo />", () => {
  const person1 = {
    id: "1",
    jobTitle: "Fabricator",
    emailAddress: "Ron_Giles3711@dionrab.com",
    firstNameLastName: "Ron Giles",
  };
  const personIsSelected = false;

  const onSelect = jest.fn();

  it("Should render person info", () => {
    const { getByText } = render(
      <PersonInfo
        person={person1}
        selected={personIsSelected}
        onSelect={onSelect}
      />
    );

    const emailInfo = getByText(person1.emailAddress);
    const firstNameLastNameInfo = getByText(person1.firstNameLastName);
    const jobTitleInfo = getByText(person1.jobTitle);

    expect(emailInfo).toBeInTheDocument();
    expect(firstNameLastNameInfo).toBeInTheDocument();
    expect(jobTitleInfo).toBeInTheDocument();
  });

  it("Should fire function onSelect after clicking on person", () => {
    const { getByRole } = render(
      <PersonInfo
        person={person1}
        selected={personIsSelected}
        onSelect={onSelect}
      />
    );

    const personContainer = getByRole("button");
    fireEvent.click(personContainer);

    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toBeCalledWith(person1.id, personIsSelected);
  });
});
