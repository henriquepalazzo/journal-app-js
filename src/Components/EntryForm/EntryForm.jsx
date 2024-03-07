import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <div className="entry-form">
      <h2>New Entry</h2>
      <form action="" className="form">
        <InputField />
        <TextareaField />
        <Button />
      </form>
    </div>
  );
}
