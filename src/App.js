import { useState } from "react";
import "./styles.css";
import Title from "./Title";
import Nav from "./Nav";
import Info from "./Info";
import Footer from "./Footer";
import Pictures from "./Pictures";
export default function App() {
  const [song, setSong] = useState("");

  return (
    <div className="App">
      <Title title="Lyrics Generator" />
      <Pictures />
      <Nav setSong={setSong} />
      <Info song={song} />
      <Footer
        authors="Ryan Nguyen and Charles Kawata"
        repolink=" https://codesandbox.io/s/api-hw2-sqbxu"
      />
    </div>
  );
}
