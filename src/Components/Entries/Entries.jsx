import Divider from "../Divider/Divider";
import Entry from "../Entry/Entry";
import { Fragment } from "react";
import "./Entries.css";

export default function Entries({ entries }) {
  return (
    <>
      {entries.map((entry, index) => (
        <Fragment key={entry.id}>
          <Entry entry={entry} />
          {index !== entries.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  );
}
