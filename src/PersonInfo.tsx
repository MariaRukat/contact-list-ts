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
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
      }}
      className={clsx("person-info", selected && "person-info-selected")}
      onClick={() => onSelect(person.id, selected)}
    >
      <div className="firstNameLastName">{person.firstNameLastName}</div>
      <div className="jobTitle">{person.jobTitle}</div>
      <div className="emailAddress">{person.emailAddress}</div>
    </div>
  );
}

export default memo(PersonInfo);
