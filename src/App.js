import "./App.css";
import AddTenants from "./components/AddTenants";
import AllTenants from "./components/AllTenants";
import TenantDetails from "./components/TenantDetails";
import TenantEdit from "./components/TenantEdit";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={true} component={AllTenants} />
        <Route path="/addtenants" component={AddTenants} />
        <Route path="/tenantDetail:id" component={TenantDetails} />
        <Route path="/tenantedit:id" component={TenantEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
