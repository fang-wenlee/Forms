import React from "react";

//use class to create contact component

export default class ContactFormComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      allFieldsValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.contactSubmit = this.contactSubmit.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name=========================
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Please Enter Your Name";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z-\s]+$/i)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Phone=========================
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9-\s]+$/)) {
        formIsValid = false;
        errors["phone"] = "Only integer";
      }
    }

    //Email====================
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Enter your email";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    let fields = this.state.fields;

    if (this.handleValidation()) {
      this.setState({ allFieldsValid: true });

      fields["name"] = "";
      fields["email"] = "";
      fields["phone"] = "";
    }
  }

  handleChange(e) {
    let fields = this.state.fields;
    // fields[field] = e.target.value;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  render() {
    const { allFieldsValid } = this.state;
    const successFormDisplay = allFieldsValid ? "block" : "none";
    const inputFormDisplay = !allFieldsValid ? "block" : "none";
    return (
      <div>
        <div style={{ display: successFormDisplay, textAlign: "center" }}>
          <h1 style={{ color: "red" }}>Success!</h1>
          <h3 style={{ color: "red" }}>
            You have successfully submitted a form.
          </h3>
        </div>

        <form
          style={{ display: inputFormDisplay }}
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit}
        >
          <div className="col-md-6">
            <fieldset>
              <input
                type="text"
                name="name"
                value={this.state.fields["name"]}
                size="30"
                placeholder="Enter Your Name"
                onChange={this.handleChange}
                //   onChange={this.handleChange.bind(this, "name")}
              />
              <span style={{ color: "red", marginLeft: "10px" }}>
                {this.state.errors["name"]}
              </span>
              <br />
              <input
                name="email"
                type="text"
                value={this.state.fields["email"]}
                size="30"
                placeholder="Email"
                onChange={this.handleChange}
                //   onChange={this.handleChange.bind(this, "email")}
              />
              <span style={{ color: "red", marginLeft: "10px" }}>
                {this.state.errors["email"]}
              </span>
              <br />
              <input
                name="phone"
                type="text"
                value={this.state.fields["phone"]}
                size="30"
                placeholder="Phone"
                onChange={this.handleChange}
                //  onChange={this.handleChange.bind(this, "phone")}
              />
              <span style={{ color: "red", marginLeft: "10px" }}>
                {this.state.errors["phone"]}
              </span>
              <br />

              <br />
              <br />
              <button>Submit</button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
