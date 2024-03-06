import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <>
      <form action="" className="form">
        <InputField />
        <TextareaField />
        <Button />
      </form>
    </>
  );
}
