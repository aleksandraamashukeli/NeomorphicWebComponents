
 # NeomorphicWebComponents

## A web component library for creating a neomorphic UI / UX


## Getting Started


### Prerequisites
install package
* npm
```sh
npm i NeomorphicComponents
```



## Usage

### vanilla js  example
```js
let dropDown = document.createElement("neo-dropdown");

dropDown.innerHTML= "gender";

dropDown.options = [{key:0,value:"male"},{key:1,value:"female"},{key:2,value:"other"}];

    
document.body.appendChild(dropDown)

```




### react example
```js
import {NeoInput} from 'NeomorphicComponents/lib/main'

function App() {
  return (
    <div className="App">
      <neo-input></neo-input>
    </div>
  );
}

export default App;
```
