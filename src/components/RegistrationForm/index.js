// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showLastNameEror: false,
    showFirstNameEror: false,
    onSubmit: true,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirst = () => {
    const {firstName} = this.state
    const isValidName = firstName === ''
    this.setState({showFirstNameEror: isValidName})
  }

  onBlurSecond = () => {
    const {lastName} = this.state
    const isValidName = lastName === ''
    this.setState({showLastNameEror: isValidName})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({showFirstNameEror: true, showLastNameEror: true})
    } else if (firstName === '') {
      this.setState({showFirstNameEror: true})
    } else if (lastName === '') {
      this.setState({showLastNameEror: true})
    } else {
      this.setState({onSubmit: false})
    }
  }

  renderFirstName = () => {
    const {firstName, showFirstNameEror} = this.state
    return (
      <>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirst}
          id="firstName"
          placeholder="First name"
          className="input"
          type="text"
          value={firstName}
        />
        {showFirstNameEror && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderLastName = () => {
    const {lastName, showLastNameEror} = this.state
    return (
      <>
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          onChange={this.onChangeSecondName}
          onBlur={this.onBlurSecond}
          id="lastName"
          placeholder="Last name"
          className="input"
          type="text"
          value={lastName}
        />
        {showLastNameEror && <p className="error-msg">Required</p>}
      </>
    )
  }

  returnToTheForm = () => {
    this.setState({onSubmit: true, firstName: '', lastName: ''})
  }

  setSuccess = () => (
    <>
      <img
        className="tick"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p className="success-para">Submitted Successfully</p>
      <button
        onClick={this.returnToTheForm}
        className="success-button"
        type="button"
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {onSubmit} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card">
          {onSubmit ? (
            <form onSubmit={this.onSubmitButton} className="formm">
              <div className="first-name-con">{this.renderFirstName()}</div>
              <div className="first-name-con">{this.renderLastName()}</div>
              <div className="button-con">
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="success-con">{this.setSuccess()}</div>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
