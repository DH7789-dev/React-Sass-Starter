import MainHeader from "./Layouts/MainHeader";
import MainFooter from "./Layouts/MainFooter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./Pages/error/NotFound";


const App =  () => {
    return (
        <Router>
            <MainHeader/>
                <Switch>
                    <Route path="/about" exact component={About}/>
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            <MainFooter/>
        </Router>

    );
}

export default App;
