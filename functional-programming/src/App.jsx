import mitt from "mitt";
// import { RecursiveComponent } from './components/recursive';
// import './App.css'
// import { RedButton } from './components/composition';
// import { GreenSmallButton } from './components/composition';

import Card from "./components/card";
import ParentComponent from "./components/parent";

// import { SmallRedButton } from './components/pertialComponent';
const myNestedObject = {
  key1:"value1",
  key2:{
    innerkey1:"innervalue1",
    innerkey2: {
      innerinnerkey1:"innerinnervalue1",
      innerinnerkey2:"innerinnervalue2",
    },
  },

  key3:"value3",
};

export const emitter = mitt();
function App() {
  

  return (
    // <>
    // <RecursiveComponent data={myNestedObject}/>
    // <RedButton text="i am red"/>
    // <GreenSmallButton text="i am green small"/>
    // <SmallRedButton text="i am small blue "/>
    // </>
    
    //compound component example below
    <>
    <Card>
      <Card.Header><h1 style={{ margin:"0"}}>Header</h1></Card.Header>
      <Card.Body>jkbhdxcgefhjfgyudsgc  fhb fbnmds  iirhhrjbhhhuw fg ffuiosdne  bb</Card.Body>
      <Card.Footer>
        <button>ok</button>
        <button>cancle</button>
      </Card.Footer>
    </Card>
    </>
    // <ParentComponent/>
     
       
  )
}

export default App
