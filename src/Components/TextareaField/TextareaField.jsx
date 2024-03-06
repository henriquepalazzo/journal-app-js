export default function TextareaField() {
  return (
    <>
      <label htmlFor="notes">Notes</label>
      <textarea
        name="notes"
        id="notes"
        cols={30}
        rows={10}
        className="form-textarea"
      ></textarea>
    </>
  );
}
