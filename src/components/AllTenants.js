import React, { Component } from "react";
import "./css/AllTenants.css";
import { Link } from "react-router-dom";

class AllTenants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenants: JSON.parse(localStorage.getItem("tenants"))
        ? JSON.parse(localStorage.getItem("tenants"))
        : [],
    };
  }

  removeTenant = async (index) => {
    let array = [...this.state.tenants];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== index) newArray.push(array[i]);
    }
    await this.setState({
      tenants: newArray,
    });
    localStorage.setItem("tenants", JSON.stringify(this.state.tenants));
  };

  setSearch = (indexNumber) => {
    localStorage.setItem("tenantIndex", JSON.stringify(indexNumber));
  };

  render() {
    return (
      <div className="allTenantsPage">
        <div className="allTenantsHeading">All Tenants</div>
        <div className="tenantHeader">
          <a href="/addtenants">
            <button>+</button>
          </a>
        </div>
        <div className="allTenants">
          {this.state.tenants.length >= 1 ? (
            <>
              {this.state.tenants.map((tenantData, index) => (
                <div className="tenant" key={index}>
                  <div className="data">
                    <div className="name">
                      <span>
                        {tenantData.tenantName ? tenantData.tenantName : ""}
                      </span>
                    </div>
                    <div className="contact">
                      <span>
                        Phone no -
                        {tenantData.tenantPhoneNo
                          ? tenantData.tenantPhoneNo
                          : "N/A"}
                      </span>
                      <span>
                        email -
                        {tenantData.tenantEmail
                          ? tenantData.tenantEmail
                          : "N/A"}
                      </span>
                    </div>
                    <div className="location">
                      <span>
                        City - {tenantData.city ? tenantData.city : "N/A"}
                      </span>
                      <span>
                        State - {tenantData.state ? tenantData.state : "N/A"}
                      </span>
                    </div>
                  </div>
                  <span id="viewAll_button">
                    <button onClick={() => this.removeTenant(index)}>
                      Remove
                    </button>
                    <Link
                      onClick={() => this.setSearch(index)}
                      to={{
                        pathname: "/tenantDetail" + index,
                        indexNumber: index,
                      }}
                    >
                      <button>View details</button>
                    </Link>
                  </span>
                </div>
              ))}
            </>
          ) : (
            <div className="tenant">
              <h2 style={{ width: "100%", textAlign: "center" }}>
                No Data availabble, click + to add data
              </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AllTenants;
