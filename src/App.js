import { useState } from "react";
import "./styles.css";

const emojidict = {
  "😊": "Smile",
  "❤": "Heart",
  "😎": "Cool",
  "😂": "Laugh",
  "😴": "sleep",
  "😠": "Angry",
  "😍": "Awww",
  "🥱": "yawn"
};
var emojiList = Object.keys(emojidict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onClickemoji(item) {
    var meaning = emojidict[item];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;

    var meaning = emojidict[inputEmoji];

    if (meaning === undefined) {
      meaning = "We dont have that in our database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input
        onChange={emojiInputHandler}
        id="input"
        size="50"
        placeholder="Give your Emoji"
      ></input>

      <h2> {meaning}</h2>

      <h3> Emojis We Know </h3>
      {emojiList.map((item) => {
        return (
          <span
            cursor="pointer"
            onClick={() => onClickemoji(item)}
            style={{ fontSize: "2rem" }}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
