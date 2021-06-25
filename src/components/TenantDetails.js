import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/TenantDetails.css";

class TenantDetails extends Component {
  constructor(props) {
    super(props);

    this.indexNumber = JSON.parse(localStorage.getItem("tenantIndex"));
    this.state = {
      tenant: JSON.parse(localStorage.getItem("tenants"))[this.indexNumber],
    };
  }

  render() {
    return (
      <div className="tenantsDetailPage">
        <div className="tenantDetailHead">
          <Link
            to={{
              pathname: "/",
            }}
          >
            <button>Home</button>
          </Link>
          <span>Tenant Details</span>
        </div>
        <div className="tenantsDetail">
          <div className="tenantName">{this.state.tenant.tenantName}</div>
          <div className="otherDetails">
            <table>
              <tbody>
                <tr>
                  <td>Tanent Name</td>
                  <td>
                    {this.state.tenant.tenantName
                      ? this.state.tenant.tenantName
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Tenant Phone no.</td>
                  <td>
                    {this.state.tenant.tenantPhoneNo
                      ? this.state.tenant.tenantPhoneNo
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Tenant Email</td>
                  <td>
                    {this.state.tenant.tenantEmail
                      ? this.state.tenant.tenantEmail
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>LandMark</td>
                  <td>
                    {this.state.tenant.landMark
                      ? this.state.tenant.landMark
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    {this.state.tenant.address
                      ? this.state.tenant.address
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>
                    {this.state.tenant.state ? this.state.tenant.state : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Zipcode</td>
                  <td>
                    {this.state.tenant.zipCode
                      ? this.state.tenant.zipCode
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>No. of Bedrooms</td>
                  <td>
                    {this.state.tenant.bedrooms
                      ? this.state.tenant.bedrooms
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>No. of Bathrooms</td>
                  <td>
                    {this.state.tenant.bathrooms
                      ? this.state.tenant.bathrooms
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>With Gaarden</td>
                  <td>
                    {this.state.tenant.garden
                      ? this.state.tenant.garden
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>With Garage</td>
                  <td>
                    {this.state.tenant.garage
                      ? this.state.tenant.garage
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>No. of Childrens</td>
                  <td>
                    {this.state.tenant.noOfChildren
                      ? this.state.tenant.noOfChildren
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Some Description</td>
                  <td>
                    {this.state.tenant.description
                      ? this.state.tenant.description
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Animal allowed</td>
                  <td>
                    {this.state.tenant.allowAnimals
                      ? this.state.tenant.allowAnimals
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>WheelChair access</td>
                  <td>
                    {this.state.tenant.wheelChairAccess
                      ? this.state.tenant.wheelChairAccess
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>air conditioner</td>
                  <td>
                    {this.state.tenant.airConditioner
                      ? this.state.tenant.airConditioner
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>With Laundry</td>
                  <td>
                    {this.state.tenant.laundry
                      ? this.state.tenant.laundry
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>With Furniture</td>
                  <td>
                    {this.state.tenant.furniture
                      ? this.state.tenant.furniture
                      : "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="editButton">
            <Link
              to={{
                pathname: "/tenantedit" + this.indexNumber,
              }}
            >
              <button>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantDetails;
