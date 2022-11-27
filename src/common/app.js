import URI from "./config";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get(URI);
  const result = response.data;
  return result;
};

export const filterData = (data, text) => {
  const value = data.filter((fiterby) => {
    if (text === "") {
      return data;
    }
    return (
      fiterby.type.toLowerCase().includes(text.toLowerCase()) ||
      fiterby.status.toLowerCase().includes(text.toLowerCase())
    );
  });

  return value;
};

export default fetchData;
