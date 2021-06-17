import Home from "../routes/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "../routes/Detail";

function App() {
   return (
      <BrowserRouter>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/:id">
            <Detail />
         </Route>
      </BrowserRouter>
   );
}

export default App;
