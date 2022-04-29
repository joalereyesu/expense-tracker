import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';
import Wrapper from './Wrapper';


class ExpenseTracker extends Component {
    constructor() {
        super();
        this.state = {
            type: "",
            name: "",
            transactionDate: new Date(Date.UTC),
            amount: "",
            expenses: [],
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
    };

    handleSubmit = () => {
        if (this.state.type && this.state.name && this.state.transactionDate && this.state.amount) {
            const addRow = {
                type: this.state.type,
                name: this.state.name,
                transactionDate: this.state.transactionDate,
                amount: this.state.amount,
            };

            const expenses = [...this.state.expenses];
            if (this.state.edit === -1) {
                expenses.push(addRow);
            }
            else {
                expenses[this.state.edit] = addRow;
            }

            this.setState({
                type: "",
                name: "",
                transactionDate: "",
                amount: "",
                edit: -1,
                expenses: expenses
            });
        }
    };

    handleDelete = (index) => {
        const expenses = [...this.state.expenses];
        expenses.splice(index, 1);
        this.setState({ ...this.state, expenses: expenses });
    };

    handleEdit = (index) => {
        const expense = this.state.expenses[index];

        this.state({
            type: expense.type,
            name: expense.name,
            transactionDate: expense.transactionDate,
            amount: expense.amount,
            edit: index,
            expenses: this.state.expenses
        });


    }


    render() {
        return (
            <Container>
                <ExpenseForm
                    type={this.state.type}
                    name={this.state.name}
                    transactionDate={this.state.transactionDate}
                    amount={this.state.amount}
                    edit={this.state.edit}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <Wrapper
                    expenses={this.state.expenses}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
            </Container>
        );
    }
}

export default ExpenseTracker;