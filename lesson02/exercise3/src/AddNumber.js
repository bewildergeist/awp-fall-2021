import { useState } from "react";
/*
A component that can add new numbers to a sum. The component renders the following:

- The sum as a number (text) inside a <p> tag.
- An input text field (HTML form element)
- A button (HTML button element). When clicking the button, the component should add the number in the text field to the sum that is displayed.
*/

function AddNumber(props) {
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  return (
    <>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
      />

      <button
        type="button"
        onClick={(event) => {
          setSum(sum + parseInt(input));
        }}>
        Add number
      </button>
      <p>Sum: {sum}</p>
    </>
  );
}

export default AddNumber;
