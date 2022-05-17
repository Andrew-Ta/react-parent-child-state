import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { Button } from 'antd';
import UserModal from './User';

class App extends React.Component {
  state = {
    firstNames: ["bob", "joe", "sally"],
    lastNames: ["smith", "jones", "johnson"],
    fullNames: [],
    isModalOpen: false,
    selectedName: "",
    selectedLastName: ""
  };

  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({ isModalOpen: true })}
        >
          Open Modal
        </Button>
        <UserModal
          isOpen={this.state.isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            this.setState({ isModalOpen: false });
          }}
          firstNames={this.state.firstNames}
          lastNames={this.state.lastNames}
          addFullName={(e) => {
            e.stopPropagation();
            this.setState({
              fullNames: [...this.state.fullNames, this.state.selectedName + " " + this.state.selectedLastName]
            });
            console.log(this.state.fullNames);
          }}
          fullNames={this.state.fullNames}
          handleNameChange={(e) => {
            this.setState({
              selectedName: e.target.value
            });
          }}
          handleLastNameChange={(e) => {
            this.setState({
              selectedLastName: e.target.value
            });
          }}
        />
      </div>
    );
  }
}

export default App;