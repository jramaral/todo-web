import axios from "axios";

const API_URL = "http://localhost:8081";

async function remove(parametro) {
  const res = await axios.delete(`${API_URL}/task/${parametro}`);

  console.log(res.data);

  return res.data;
}

export { remove };
