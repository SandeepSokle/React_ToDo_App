let Data = (props) => {
  let c = props.isComplete;
  // console.log(props.isComplete);
  let newData;
  if (props.isComplete === "true") {
    newData = props.data.filter((e) => {
      return !e.ischeck;
    });
  } else {
    newData = props.data.filter((e) => {
      return e.ischeck;
    });
  }

  return (
    <div className="dataContainer">
      {newData.map((e) => {
        return (
          <div className="data">
            <input
              type="checkbox"
              className="check"
              checked={c === "true" ? false : true}
              onChange={(e) => {
                let currTar = e.target;
                console.log(currTar);
                if (currTar.getAttribute("checked") === true) {
                  currTar.setAttribute("checked", false);
                } else {
                  currTar.setAttribute("checked", true);
                }
                
                /////////////////////set ceck state
                
                let val = currTar.parentNode.innerText.split("\n")[0];
                console.log(val);
                let newData = props.data.map((e)=>{
                  return e;
                });
                let isAvailable = newData.find((e) => {
                  return e.task === val;
                });

                isAvailable.ischeck =
                  isAvailable.ischeck === true ? false : true;
               
                localStorage.setItem(
                  "react-todo-app-using-hooks",
                  JSON.stringify(newData)
                );
                console.log(newData);
                props.setData(newData);
                ////////////
              }}
            ></input>
            <div className="dataValue">{e.task}</div>
            <button
              type="reset"
              className="dlt"
              onClick={(e) => {
                let val = e.target.parentNode.innerText.split("\n")[0];
                props.deleteNode(val);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
