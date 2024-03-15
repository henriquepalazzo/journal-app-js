import Divider from "../Divider/Divider";
import Entry from "../Entry/Entry";
import { Fragment } from "react";
import "./Entries.css";

export default function Entries({ entries, onToggleFavorite }) {
  return (
    <>
      {entries.map((entry, index) => (
        <Fragment key={entry.id}>
          <Entry
            entry={entry}
            onToggleFavorite={onToggleFavorite}
            id={entry.id}
            isFavorite={entry.isFavorite}
          />
          {index !== entries.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  );
}
