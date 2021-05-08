import './App.css';
import Sidebar from './components/sidebar';
import Navigation from './components/navbar';
import Dashboard from './components/dashboard/dashboard';
import Datatable from './components/table';
import {BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Users from './components/users';
import Userscreate from './components/userscreate';
import Usersedit from './components/usersedit';
import Products from './components/products';
import Productscreate from './components/productscreate';
import Productsedit from './components/productsedit';
import { UserProvider } from './components/userContext';


function App() {
 return <>
 <Router> 
   <div id="wrapper">
   <Sidebar></Sidebar>
   <div id="content-wrapper" class="d-flex flex-column">
   <div id="content">
        <Navigation></Navigation>
        <UserProvider>
        <Switch>
         <Route path="/dashboard" component={Dashboard} exact={true}></Route>
         <Route path="/products" component={Products} exact={true}></Route>
         <Route path="/users" component={Users} exact={true}></Route>
         <Route path="/userscreate" component={Userscreate} exact={true}></Route>
         <Route path="/tables" component={Datatable} exact={true}></Route>
         <Route path="/productscreate" component={Productscreate} exact={true}></Route>
         <Route path="/productsedit/:id" component={Productsedit} exact={true}></Route>
         <Route path="/usersedit/:id" component={Usersedit} exact={true}></Route>
       </Switch>
       </UserProvider>
   </div>
   </div>
 </div>
 </Router>


 </>
}

export default App;
