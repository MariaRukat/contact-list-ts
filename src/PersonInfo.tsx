import React, { memo } from "react";
import clsx from "clsx";

export type TPerson = {
  id: string;
  firstNameLastName: string;
  jobTitle: string;
  emailAddress: string;
};

type TProps = {
  person: TPerson;
  selected: boolean;
  onSelect: (id: string, isSelected: boolean) => void;
};

function PersonInfo(props: TProps) {
  const { person, selected, onSelect } = props;
  return (
    <div
      className={clsx("person-info", selected && "person-info-selected")}
      onClick={() => onSelect(person.id, selected)}
      role="button"
    >
      <div className="firstNameLastName">{person.firstNameLastName}</div>
      <div className="jobTitle">{person.jobTitle}</div>
      <div className="emailAddress">{person.emailAddress}</div>
    </div>
  );
}

export default memo(PersonInfo);
