import "./main-props.css"

const MainProp = (props) => {
  return (
    <div className="user-container">
      <center>
        <h1 id='user-name'>{props.name}</h1>
        <img id="user-img" src={props.img} alt={props.name}></img>
        <h2 id='user-desc'>{props.desc}</h2>
        {props.children}
     </center>
     </div>
  );
}

export default MainProp;
