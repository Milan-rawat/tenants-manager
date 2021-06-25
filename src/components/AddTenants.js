import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/AddTenants.css";

class AddTenants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenant: {
        tenantName: "",
        tenantPhoneNo: "",
        tenantEmail: "",
        landMark: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        bedrooms: "",
        bathrooms: "",
        garden: "",
        garage: "",
        noOfChildren: "",
        description: "",
        allowAnimals: "",
        wheelChairAccess: "",
        airConditioner: "",
        laundry: "",
        furniture: "",
      },
    };
  }

  addTenant = async () => {
    let allTenants = JSON.parse(localStorage.getItem("tenants"))
      ? JSON.parse(localStorage.getItem("tenants"))
      : [];

    allTenants.push(this.state.tenant);
    localStorage.setItem("tenants", JSON.stringify(allTenants));
    alert("Tenant added successfully");
  };

  render() {
    return (
      <div className="addTenants">
        <div className="tenantsHeader">
          <a href="/">
            <button>Home</button>
          </a>
          <div className="tenantsHeading">Add Tenant data</div>
        </div>
        <div className="tenantsForm">
          <div className="inputField">
            <label htmlFor="tenant_name">Tenant Name</label>
            <input
              type="text"
              className="inputBar"
              id="tenant_name"
              value={this.state.tenant.tenantName}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, tenantName: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="tenant_phone">Tenant Phone no.</label>
            <input
              type="number"
              className="inputBar"
              id="tenant_phone"
              value={this.state.tenant.tenantPhoneNo}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: {
                    ...prevState.tenant,
                    tenantPhoneNo: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="tenant_email">Tenant Email</label>
            <input
              type="email"
              className="inputBar"
              id="tenant_email"
              value={this.state.tenant.tenantEmail}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, tenantEmail: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              className="inputBar"
              id="landmark"
              value={this.state.tenant.landMark}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, landMark: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="inputBar"
              id="address"
              value={this.state.tenant.address}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, address: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="inputBar"
              id="city"
              value={this.state.tenant.city}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, city: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="inputBar"
              id="state"
              value={this.state.tenant.state}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, state: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="zipcode">zipCode</label>
            <input
              type="number"
              className="inputBar"
              id="zipcode"
              value={this.state.tenant.zipCode}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, zipCode: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="bedrooms">Bedroom</label>
            <select
              value={this.state.tenant.bedrooms}
              className="inputBar"
              id="bedrooms"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, bedrooms: e.target.value },
                }))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="bathrooms">Bathrooms</label>
            <select
              value={this.state.tenant.bathrooms}
              className="inputBar"
              id="bathrooms"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, bathrooms: e.target.value },
                }))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="garden">Garden</label>
            <select
              value={this.state.tenant.garden}
              className="inputBar"
              id="garden"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, garden: e.target.value },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="garage">Garage</label>
            <select
              value={this.state.tenant.garage}
              className="inputBar"
              id="garage"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, garage: e.target.value },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="no_of_child">No. of Children</label>
            <select
              value={this.state.tenant.noOfChildren}
              className="inputBar"
              id="no_of_child"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, noOfChildren: e.target.value },
                }))
              }
            >
              <option value="no">no</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="more than 3">more than 3</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="description">House Description</label>
            <input
              type="text"
              className="inputBar"
              id="description"
              value={this.state.tenant.description}
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, description: e.target.value },
                }))
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="animals_allow">Animals allowed</label>
            <select
              value={this.state.tenant.allowAnimals}
              className="inputBar"
              id="animals_allow"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, allowAnimals: e.target.value },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="wheel_chair">Wheel Chair access</label>
            <select
              value={this.state.tenant.wheelChairAccess}
              className="inputBar"
              id="wheel_chair"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: {
                    ...prevState.tenant,
                    wheelChairAccess: e.target.value,
                  },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="airconditioner">AirConditioner</label>
            <select
              value={this.state.tenant.airConditioner}
              className="inputBar"
              id="airconditioner"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: {
                    ...prevState.tenant,
                    airConditioner: e.target.value,
                  },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="laundry">Laundry</label>
            <select
              value={this.state.tenant.laundry}
              className="inputBar"
              id="laundry"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, laundry: e.target.value },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="furniture">Furniture</label>
            <select
              value={this.state.tenant.furniture}
              className="inputBar"
              id="furniture"
              onChange={(e) =>
                this.setState((prevState) => ({
                  tenant: { ...prevState.tenant, furniture: e.target.value },
                }))
              }
            >
              <option value="" disabled></option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="addButton">
            <div className="buttons">
              <Link
                to={{
                  pathname: "/",
                }}
              >
                <button>Cancel</button>
              </Link>
              <button onClick={this.addTenant}>ADD</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTenants;
