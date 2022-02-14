import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';

function Sidebar1(){
  return(
    <div class="sidebar" style={{backgroundColor:"#696969"}}>
            <ul>
                <li class="nav-item mb-2"><h3>Brand Name</h3></li>
                <li class="nav-item mb-2"><img src="logo.svg" style={{'borderRadius':'5px'}}></img></li>
                <li class="nav-item mb-2">Hyat</li>
                <li class="nav-item mb-2">Product Desiner</li>
                <li class="nav-item mb-2"><button>Create Link</button></li>
                <li class="nav-item mb-2">Overview</li>
                <li class="nav-item mb-2">MyLinks</li>
                <li class="nav-item mb-2">Extras</li>
            </ul>
       </div>
  )
}
function Sidebar2()
{
  return(
    <div  class="sidebar2">
           <h2 class="dash">Overview</h2>
            <div class="row">
               <div class="column">Box1</div>
               <div class="column">Box2</div>
               <div class="column">Box3</div>
            </div>
       </div>
  )
}
function Graph()
{
  return (
    <div  class="sidebar2">
            <div class="row">
               <div class="column">Daily Insight</div>
               <div class="column">
                 <ul >
                   <li class="list2">Api Version</li>
                   <li class="list2">Frontend Version</li>
                   <li class="list2">Links generated yet</li>
                   <li class="list2">Total views yet</li>
                 </ul>
               </div>
            </div>
       </div>
  )
}


function App() {
  return (
    <div>
      
    <Sidebar1 />
    <Sidebar2 />
    <Graph />
    </div>
  );
}

export default App;
