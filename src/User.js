import * as React from 'react';
import { Modal } from 'antd';

class UserModal extends React.Component {
    render() {
        return (
            <Modal
            title="Add Names"
            centered={true}
            visible={this.props.isOpen}
            okText="save"
            onCancel={this.props.onClose}
            firstNames={this.props.firstNames}
            lastNames={this.props.lastNames}
            fullNames={this.props.fullNames}
            >
                <div>
                    <select 
                        value={this.props.selectedName}
                        onChange={this.props.handleNameChange}
                    >
                        <option value="">Select Name</option>
                        {this.props.firstNames.map((firstName, index) => (
                            <option key={index} value={firstName}>{firstName}</option>
                        ))}
                    </select>
                    <select 
                        value={this.props.selectedLastName}
                        onChange={this.props.handleLastNameChange}
                    >
                        <option value="">Select Last Name</option>
                        {this.props.lastNames.map((lastName, index) => (
                            <option key={index} value={lastName}>{lastName}</option>
                        ))}
                    </select>
                    <button onClick={this.props.addFullName}>add</button>    
                </div>
                <hr/>
                <div>
                    <h3>Full Names</h3>
                    {this.props.fullNames.map((fullName, index) => (
                        <p key={index}>{fullName}</p>
                    ))}
                </div>
            </Modal>
        );
    }
}

export default UserModal;
