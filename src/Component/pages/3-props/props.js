import Props from './main-props';
import img1 from "./images/img1.png"
import img2 from "./images/img2.webp"
import img3 from "./images/img3.webp"
import img4 from "./images/img4.webp"
import './main-props.css';

function App(props) {
  return (
    <div classname="container">
      <Props name="Vi With Maruti" img={img1} desc="Vi is very lucky because his with Maruti."/>
      <Props name="Vi With Hourse" img={img2} desc="Actually, Vi loves horse."/>
      <Props name="Vi With Style" img={img3} desc="Vi is real stylish hero."/>
      <Props name="Vi With Deep Think" img={img4} desc="Vi is not overthinker but aware about his future"/>
      <Props>
        <h3>This is Children Component print.</h3>
      </Props>
    </div>
  );
}

export default App;
