import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import "./EntryForm.css";

export default function EntryForm({ onAddEntry }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    console.log(newEntry);
    onAddEntry(newEntry);
    event.target.reset();
  }
  return (
    <div className="entry-form">
      <h2>New Entry</h2>
      <form onSubmit={onSubmit} className="form">
        <InputField />
        <TextareaField />
        <Button />
      </form>
    </div>
  );
}
