import { useState } from 'react/cjs/react.development';
import Light from './components/Light';
import Lightswitch from './components/Lightswitch';
import { Ground, Room, Self } from './ui/Room';


function App() {

  const [firstlight, setfirstlight] = useState(true);
  const [seclight, setseclight] = useState(false);

  const firstbtn = () =>{
    setfirstlight(!firstlight)
  };

  const secbtn = () => {
		setseclight(!seclight);
	};

  return (
		<Ground>
			<Room>
				<Self>
					<Light lighton={firstlight}></Light>
					<Light lighton={seclight}></Light>
				</Self>
				<Self>
					<Lightswitch callback={firstbtn} btn={firstlight}></Lightswitch>
					<Lightswitch callback={secbtn} btn={seclight}></Lightswitch>
				</Self>
			</Room>
		</Ground>
	);
}

export default App;
