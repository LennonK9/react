import Patient from './components/patient';
import Department from './components/department';
import Doctor from './components/doctor';

const App = () => {

  return (

   <div className="app">

        <Patient name="Homer" age="36">

              <Department department="ICU" nurse="Kitty Forman">
                
                <Doctor forename="Micheal" surname="Connor" age="42"/>

               </Department>

         </Patient>

   </div>

 );

}

export default App;
