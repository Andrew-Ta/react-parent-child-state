import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { Button } from 'antd';
import UserModal from './User';

class App extends React.Component {
  state = {
    isModalOpen: false
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
        />
      </div>
    );
  }
}

export default App;