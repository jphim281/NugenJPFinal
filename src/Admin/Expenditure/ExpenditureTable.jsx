import React, { Component } from 'react';
import './css/ExpenditureTable.css';
import Helper from '../../Common/Helper';
class ExpenditureTable extends Component{

    constructor() {
        super();

        this.state = {
            expenditures : []
        }
    }

    componentWillMount() {
        Helper('expenditures', 'GET', '')
        .then((res) => {
            this.setState({
                expenditures: res
            })
        })
    }

    clickss = () => {
        console.log("Clickksss fired");
    }

    render(){
        console.log(this.state.expenditures)
        return(
            <div>
                <table className="edit-table">
                    <tr>
                        <th>ID</th>
                        <th>Paid By</th>
                        <th>Description</th>
                        <th>Mode Of Payment</th>
                        <th>From Account</th>
                        <th>Amount</th>
                        <th>Update</th>
                    </tr>
                    {/* <tr>
                        <td>1</td>
                        <td>11am to 1pm</td>
                        <td>React Js</td>
                        <td><i onClick={this.props.toggleState} className="fas fa-edit"> </i></td>
                    </tr> */}
                    {
                        this.state.expenditures.map((v, i) => {
                            return(
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.paid_by}</td>
                                    <td>{v.description}</td>
                                    <td>{v.mode_of_payment}</td>
                                    <td>{v.from_account_of}</td>
                                    <td>{v.amount}</td>
                                    {/* <td><i onClick={() => this.props.toggleState(`'${v.paid_by}'`)} className="fas fa-edit"> </i></td> */}
                                    <td><i onClick={() => this.props.toggleState(v)} className="fas fa-edit"> </i></td>
                                </tr>    
                            )
                        })
                    }

                </table>
            </div>
        )
    }
}
export default ExpenditureTable;