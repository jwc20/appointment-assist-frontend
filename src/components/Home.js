import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9292/";

function Home() {
  useEffect(() => {
    fetch(BASE_URL + "appointments")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default Home;
