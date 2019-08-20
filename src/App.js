import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './components/listComponent'
import StringComponent from './components/stringComponent'
import ErrorBoundary from './components/errorBoundary'
import Modal from './components/modal'
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
      user: { name: "react"},
      showModal: false
    } 

  }

  onClick = () => {
    this.setState({ user: null })
  }

  // 关闭弹窗
  closeModal = () => {
    this.setState({ showModal: false })
  }

  // 打开弹窗
  openModal() {
    this.setState({ showModal:true })
  }
  render() {
    return (
      <div>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <div>
          <div>
            <h2 onClick={ () => this.openModal()}>showMoal</h2>
            {
              this.state.showModal && (<Modal onClose={this.closeModal} children="我是共和国">33333</Modal>)
            }
          </div>

          Edit <code>src/App.js</code> and save to reload.
          </div>
         <ListComponent></ListComponent>
          <div>Learn React</div>
         <StringComponent></StringComponent>
         <ErrorBoundary>
           <Profile user = {this.state.user}></Profile>
         </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
       </header>
      </div>  
    </div>
  )
 }
}
export default App;
