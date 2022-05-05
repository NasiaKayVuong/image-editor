import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [url, setUrl] = useState("");

  function layoverString(str) {
    const newStr = str.replaceAll("+", "%20");
    return newStr;
  }

  function urlSet(str1, str2) {
    let url = new URL("https://assets.imgix.net/examples/butterfly.jpg?");
    const url2 =
      "&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50";
    let params = new URLSearchParams(url.search);
    params.append("txt", str1);
    params.append("blend", str2);
    let newUrl = layoverString(params.toString());
    return url + newUrl + url2;
  }

  const handleSubmit = (e) => {
    setUrl(urlSet(text, color));
    console.log(urlSet(text, color));
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
      <div className="form-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="row">
        <div className="row">
          <div className="col-75">
          <label>Text</label>
            <input
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
           </div>
           </div>
           <div className="row">
          <div className="col-75">
          <label> Hex Color </label>
          <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
           </div>
           </div>
           <div className="col-75">
          <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
      </div>
      <div className="image-center">
        {url ? (
          <img src={url} alt="pic"></img>
        ) : (
          <h1> Create your custom image edit!</h1>
        )}
      </div>
      </div>
    </div>
  );
}
