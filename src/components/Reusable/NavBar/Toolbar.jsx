import React, { useState, useContext } from 'react';
import '../../../style/CSS/Reusable/Navbar/Navbar.css';
import { ThemeContext } from '../../../ThemeContext';

export default function Toolbar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const handleChange = () => {
    changeTheme();
    setIsOn(!isOn);
  };

  function ToggleKnob() {
    return (
      <span
        className={`toggleKnob 
                      ${isOn ? 'isActive' : ''}`}
      ></span>
    );
  }

  return (
    <div className="mode">
      {' '}
      <p>Mode</p>
      <button
        type="button"
        className={`toggleContainer ${isOn ? 'isActive' : ''}`}
        onClick={() => handleChange()}
        defaultValue={theme}
      >
        <ToggleKnob />
      </button>
    </div>
  );
}

// class ToggleKnob extends React.Component {
//   render() {
//     return (
//       <span
//         className={`toggleKnob
//                     ${this.props.isOn ?
//                     "isActive" : ""}` }
//       >
//       </span>
//     );
//   }
// }

// class ToggleButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOn: false
//     }
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isOn: !prevState.isOn
//     }));
//     console.log(this.state.isOn);
//   }

//   render() {
//     return (
//       <button className={`toggleContainer ${this.state.isOn ? "isActive" : ""}`}
//               onClick={() => this.handleClick() }
//       >
//         <ToggleKnob isOn={this.state.isOn}/>
//       </button>
//     )
//   }
// }
