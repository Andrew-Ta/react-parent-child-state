import * as React from 'react';
import { Modal } from 'antd';

class UserModal extends React.Component {
    render() {
      return (
        <Modal
          title="title"
          centered={true}
          visible={this.props.isOpen}
          okText="ok"
          onCancel={this.props.onClose}
        >
          Test
        </Modal>
      );
    }
  }

export default UserModal;
