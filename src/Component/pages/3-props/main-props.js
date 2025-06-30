import "./main-props.css"

const MainProp = (props) => {
  return (
    <div className="user-container">
      <center>
        <p id='user-name'>{props.name}</p>
        <img id="user-img" src={props.img} alt={props.name}></img>
        <p id='user-desc'>{props.desc}</p>
     </center>
     </div>
  );
}

export default MainProp;
