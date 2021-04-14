import Exercise from './exercise/Exercise';
import Bonus from './bonus/Bonus';

function App() {
  return (
    <div>
    <Exercise/>
    <Exercise good='awesome' bad='terrible'/>
    <Bonus/>
    </div>
  );
}

export default App;
