import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

class ExpensesTable extends Component {
    constructor() {
        super();
        this.state = { sortBy: '' };
    }

    render() {
        const exp = this.props.expenses;
        if (this.state.sortBy !== '') {
            exp.sort((a, b) => {
                return a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1;
            });
        }

        return (
            <Table striped bordered hover variant="dark" className="mt-5">
                <thead>
                    <tr>
                        <th>
                            <Button
                                variant="secondary"
                                onClick={() => this.setState({ sortBy: 'type' })}
                            >
                                Type
                            </Button>
                        </th>
                        <th>
                            <Button
                                variant="secondary"
                                onClick={() => this.setState({ sortBy: 'name' })}
                            >
                                Name
                            </Button>
                        </th>
                        <th>
                            <Button
                                variant="secondary"
                                onClick={() => this.setState({ sortBy: 'date' })}
                            >
                                Date
                            </Button>
                        </th>
                        <th>
                            <Button
                                variant="secondary"
                                onClick={() => this.setState({ sortBy: 'amount' })}
                            >
                                Amount
                            </Button>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exp
                        .filter((expense) => {
                            if (!this.props.filter) return true;
                            let name = expense.name.toLowerCase();
                            return name.includes(this.props.filter.toLowerCase());
                        })
                        .map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.type}</td>
                                <td>{expense.name}</td>
                                <td>{expense.transactionDate.toLocaleDateString('es-GT')}</td>
                                <td>
                                    <span>$</span>
                                    {expense.amount}
                                </td>
                                <td>
                                    <ButtonToolbar>
                                        <Button
                                            className="me-2"
                                            variant="outline-light"
                                            onClick={(e) => this.props.handleEdit(index)}
                                        >
                                            ✎
                                        </Button>
                                        <Button
                                            className="me-2"
                                            variant="outline-light"
                                            onClick={(e) => this.props.handleDelete(index)}
                                        >
                                            X
                                        </Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        );
    }
}

export default ExpensesTable;