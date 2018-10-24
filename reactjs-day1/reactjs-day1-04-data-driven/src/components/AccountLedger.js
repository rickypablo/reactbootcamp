import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class AccountLedger extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            ledgerdate: "",
            title: "",
            amount: 0,
            totaldebit: 0,
            totalcredit: 0,
            balance: 0,
            entries: []
        };
    }

    handleOnChange (e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let entries = this.state.entries;
        entries.push({ledgerdate: this.state.ledgerdate, title: this.state.title, amount: this.state.amount});
        this.setState({entries: entries});
        this.calculateledger();
    }

    calculateledger = () => {
        let entries = this.state.entries;
        let ledgerdate = "";
        let title = "";
        let amount = 0;
        let totaldebit = 0;
        let totalcredit = 0;
        entries.forEach(data => {
            let amount = parseInt(data.amount);
            if(amount >= 0) {
                 totaldebit = totaldebit + amount;
            }
            else {
                 totalcredit = totalcredit + amount;
            }
        });
        let balance = totalcredit + totaldebit;
        this.setState({ledgerdate, title, amount, totalcredit, totaldebit, balance})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">Debit</div>
                            <div className="card-body">
                                <h1>{this.state.totaldebit}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-danger text-white">Credit</div>
                            <div className="card-body">
                                <h1>{this.state.totalcredit}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">Balance</div>
                            <div className="card-body">
                                <h1>{this.state.balance}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit} className="form-inline">
                            <div className="mr-5">
                                Date: <input type="date" name="ledgerdate" placeholder="Date" onChange={this.handleOnChange} value={this.state.ledgerdate} />
                            </div>
                            <div className="mr-5">
                                Title: <input type="text" name="title"  placeholder="Title" onChange={this.handleOnChange} value={this.state.title}/>
                            </div>
                            <div className="mr-5">
                                Amount: <input type="text" name="amount" onChange={this.handleOnChange} value={this.state.amount} />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Create Record"/>
                        </form>
                    </div>
                </div> 
                <div className="mt-5">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <td>Date</td>
                            <td>Title</td>
                            <td>Amount</td>    
                            <td>{ }</td>
                            <td>{ }</td>                                                    
                        </thead>
                        <tbody>
                            {this.state.entries.map(data => (
                                <tr>
                                    <td>{data.ledgerdate}</td>
                                    <td>{data.title}</td>
                                    <td>{data.amount}</td>  
                                    <td><input type="button" className="btn btn-primary" value="EDIT" /></td>
                                    <td><input type="button" className="btn btn-danger" value="DELETE" /></td>                                                                                                          
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
        );
    }
}

export default AccountLedger;