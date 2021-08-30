

let Input = (props) => {  
  // console.log(props);
    return (
    <div className="inputContainer">
      <input
        type="text"
        className="inputBox"
        placeholder="task........"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            let dataValue = e.currentTarget.value;
            e.currentTarget.value = "";
            if (dataValue !== "") {
              props.setTask(dataValue);
            }
          }
        }}
      ></input>
      <button
        className="submit"
        type="submit"
        onClick={(e) => {
          let dataValue = document.querySelector(".inputBox").value;
          document.querySelector(".inputBox").value = "";
          if (dataValue !== "") {
            props.setTask(dataValue);
          }
        }}
      >
        Add
      </button>
      <button className = "completeTarget" type = "submit" onClick = {(e)=>{
        if(e.target.classList.contains("select")){
          e.target.classList.remove("select")
        }else{
          e.target.classList.add("select")
        }
         props.setIsComplete();
      }}>Completed</button>
    </div>
  );
};

export default Input;
