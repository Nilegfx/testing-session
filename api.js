import axios from "axios";

export const addVote = async () => {
  console.log("----------+++++++++++-----------");
  return axios.get("http://localhost:3001/data");
};
