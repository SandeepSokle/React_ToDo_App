import Input from "./Input";
import Data from "./Data";
import { useState, useEffect } from "react";
let App = () => {
  let [isComplete, setIsComplete] = useState("true");
  let [data, setData] = useState([]);

  useEffect(() => {
    let localStorageData = JSON.parse(
      localStorage.getItem("react-todo-app-using-hooks")
    );

    if (localStorageData == null) localStorageData = [];

    setData(localStorageData);
  }, []);

  let setTask = (dataVal) => {
    let isAvailable = data.find((e) => {
      return e.task === dataVal;
    });

    if (isAvailable == null) {
      let dataObj = {
        task: dataVal,
        ischeck: false,
      };
      let newData = [...data, dataObj];

      localStorage.setItem(
        "react-todo-app-using-hooks",
        JSON.stringify(newData)
      );

      setData(newData);

      // console.log(data);
      // console.log(newData);
    }
  };

  let setCheck = () => {
    if (isComplete === "true") setIsComplete("false");
    else setIsComplete("true");
  };



  let deleteNode = (val) => {
    let localStorageData = JSON.parse(
      localStorage.getItem("react-todo-app-using-hooks")
    );

    if (localStorageData == null) localStorageData = [];

    let newData = localStorageData.filter((e) => {
      // console.log(val , e);
      return e.task !== val;
    });
    // console.log(val,newData);
    localStorage.setItem("react-todo-app-using-hooks", JSON.stringify(newData));
    setData(newData);
  };

  // console.log(isComplete);

  return (
    <div className="container">
      <Input
        setTask={setTask}
        setData={setData}
        setIsComplete={setCheck}
        isComplete={isComplete}
      />
      <Data
        data={data}
        isComplete={isComplete}
        setData={setData}
        deleteNode={deleteNode}
      />
    </div>
  );
};

export default App;
