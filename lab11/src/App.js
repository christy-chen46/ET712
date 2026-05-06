import './App.css';
import jap from "./images/jap.jpg"

function App() {
  return (
    <div>
      <h1 style={{color: "olive", textAlign: "center"}}>Christy Chen</h1>
      <h2 className='subtitle'>Javascript XML</h2>
      <p>There is two types of components in ReactJS:</p>
      <ul>
        <li>function</li>
        <li>class</li>
      </ul>
      <figure className='introimg'>
        <img src={jap} />
      </figure>
      <footer className='footer'>
        introduction to ReactJS @ Christy Chen - 2026
      </footer>
    </div>
  );
}

export default App;
