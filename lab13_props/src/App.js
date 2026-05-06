import './App.css';
import User from './card'
import batman_img from './images/batman.png';
import vader_img from './images/vader.png';
import pen_img from './images/pen.png';

function App() {
  return (
    <div className="App">
      <h1 className='apptitle'>Christy Chen</h1>
      <section className='appcontainer'>
        <User_feedback>
          <User image={batman_img} name = "Batman" date = "12/02/25" msg = "I'm Batman"/>
        </User_feedback>

        <User_feedback>
          <User image={vader_img} name = "Darth Vader" date = "12/03/25" msg = "Darth Vader"/>
        </User_feedback>

        <User_feedback>
          <User image={pen_img} name = "Penguin" date = "11/23/25" msg = "I'm Penguin"/>
        </User_feedback>
      </section>
    </div>
  );
}

export default App;
