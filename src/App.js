import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    //Getting Data
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Getting the data", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Posting Data
  const postData = (e) => {
    e.preventDefault();

    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
    })
      .then((res) => console.log("Posting Data", res))
      .catch((err) => console.log(err));
  };

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td style={{ border: "1px solid black" }}>{data.id}</td>
        <td style={{ border: "1px solid black" }}>{data.title}</td>
        <td style={{ border: "1px solid black" }}>{data.body}</td>
      </tr>
    );
  });
  return (
    <div className="App">
      <h1>Fetch data using Axios React.</h1>
      <form>
        <lable>Title</lable>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr />
        <lable>Body</lable>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <hr />
        <button onClick={postData}>POST</button>
      </form>

      <table style={{ border: "1px solid black" }}>
        <tr>
          <th style={{ border: "1px solid black" }}>User Id</th>
          <th style={{ border: "1px solid black" }}>Title</th>
          <th style={{ border: "1px solid black" }}>Body</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default App;
