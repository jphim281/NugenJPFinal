import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import './css/ExpenditureEditInfo.css';

class ExpenditureEditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                amount: this.props.user.amount,
                description: this.props.user.description,
                from_account_of: this.props.user.from_account_of,
                mode_of_payment: this.props.user.mode_of_payment,
                paid_by: this.props.user.paid_by
            }
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            user: props.user
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault();
    }

    addExpenditures = () => {
        Helper('expenditures', 'POST', this.state)
            .then((res) => {
                if (res.msg === 1) {
                    console.log("Expenditure added successfully");
                }
            })
            .catch((err) => {
                console.log(err + " Error")
            })
    }

    render() {

        return (
            <div className="inp-details-cont">
                <div className="inp-details-box">
                    <form onSubmit={this.handleForm}>
                        <div className="detail-box">
                            <label>PAID BY</label>
                            <input onChange={this.handleInput} type="text" name="paid_by" value={this.state.user.paid_by} />
                        </div>
                        <div className="detail-box">
                            <label>Description</label>
                            <input onChange={this.handleInput} type="text" name="description" value={this.state.user.description}/>
                        </div>
                        <div className="detail-box">
                            <label>Mode Of Payment</label>
                            <select onChange={this.handleInput} name="mode_of_payment" id="mode" value={this.state.user.mode_of_payment}>
                                <option value="">Mode Of Payment</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">Cheque</option>
                                <option value="paytm">Paytm</option>
                                <option value="googlepay">Google Pay</option>
                                <option value="phonepe">Phone Pe</option>
                            </select>
                        </div>
                        <div className="detail-box">
                            <label>From Account Of</label>
                            <input onChange={this.handleInput} type="text" name="from_account_of" value={this.state.user.from_account_of}/>
                        </div>
                        <div className="detail-box">
                            <label>Amount</label>
                            <input onChange={this.handleInput} type="number" name="amount" value={this.state.user.amount}/>
                        </div>
                        <button onClick={this.addExpenditures} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default ExpenditureEditInfo;