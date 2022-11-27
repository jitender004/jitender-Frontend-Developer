import React, { useEffect, useState } from "react";
import fetchData, { filterData } from "../common/app";
import Banner from "./Banner";
import Pagination from "./Pagination";
import DisplayData from "./DisplayData";
import SearchBar from "./SearchBar";
const Main = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setData(data);
    };
    loadData();
  }, []);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <>
      <Banner />
      <SearchBar setText={setText} />
      <DisplayData data={filterData(currentRecords, text)} text={text} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Main;
