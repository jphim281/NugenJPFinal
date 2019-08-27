import React, { Component } from 'react';
import './css/Batches.css';
import BatchInput from './BatchInput';
import Sidebar2 from '../../Sidebar2/Sidebar2';
import Head from '../../Head/Head';
// import Helper from '../../Common/Helper';

class Batches extends Component {

    state = {
        show: false
    }

    showExpInp = () => {
        this.setState( {
            show: true
        })
    }

    updateParState = () => {
        this.setState({
            show: false
        })
    }

    render() { 
        return (  
            <div>
                <Head />
                <Sidebar2 />
                <div className="batch-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Batches</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                    </div>
                    <div className="box">
                        <table>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Batch Timing</th>
                                <th>Course Name</th>
                                <th>Update</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>11am to 1pm</td>
                                <td>React Js</td>
                                <td><i className="fas fa-edit"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <BatchInput show={this.state.show} toggleState={this.updateParState}/>
            </div>  
        );
    }
}
 
export default Batches;