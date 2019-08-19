import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ListComponent from './components/listComponent'
// import StringComponent from './components/stringComponent'
import ErrorBoundary from './components/errorBoundary'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <ListComponent></ListComponent>
//           <div>Learn React</div>
//         <StringComponent></StringComponent>
//       </header>
//     </div>
//   );
// }
const Profile = ({user}) => <div>name:{user.name }</div>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "react"}
    } 

  }

  onClick = () => {
    this.setState({ user: null })
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user = {this.state.user}></Profile>
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
   }
}
export default App;
