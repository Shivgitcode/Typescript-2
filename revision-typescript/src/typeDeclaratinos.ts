import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

async function getData() {
  const data = await axios.get(url);
  console.log(data);
}

getData();
