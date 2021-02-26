import _ from 'lodash';
import React, { Component } from 'react';
// import { Card, Table, Search, Grid, Button, Icon, Popup, Message, Pagination, Modal, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { getMessage } from '../../actions/message';

import "./AllMessages.scss";

class AllMessages extends Component {
    
    state = {
        messages: [],
        theProduct: {}
    }

    componentDidMount = () => {
        const { getMessage } = this.props;
        getMessage();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({
            messages: nextProps.listOfMessage,
        });

        return this.setState;
    };

    render() {
        const { messages, theMessage } = this.state;
        console.log('messages => ', messages);
        return (
            <div className="container">
                <form className="search-input">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Emails" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="messages">
                    <p>
                        <span className="big">Results: ({messages.length})</span>
                        mail({messages.length > 1 ? 's' : ''})
                    </p>

                    {Object.keys(messages).length > 0 ?
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="table-secondary">
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Subject</th>
                                        <th>Body</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {_.map(messages, (message) => (
                                        <tr key={message.id}>
                                            <td>{message.messagefrom}</td>
                                            <td>{message.messageto}</td>
                                            <td>{message.messagesubject}</td>
                                            <td>{message.messagebody}</td>
                                            <td>{message.createddate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        :
                        <p>No emails available</p>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({
    message: {
        listOfMessage
    } }) => ({
        listOfMessage
 });

export default connect(mapStateToProps, { getMessage })(AllMessages);
