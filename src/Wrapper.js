import { Component } from "react";
import { Container } from "react-bootstrap";
import FilterSearch from "./FilterSearch";
import ExpensesTable from "./ExpensesTable";

class Wrapper extends Component {
    constructor() {
        super();
        this.state = { filter: '' };
    }

    render() {
        const setText = (text) => {
            this.setState({ filter: text })
        }
        return (
            <Container>
                <FilterSearch
                    handleSearch={setText}
                />
                <ExpensesTable
                    filter={this.state.filter}
                    expenses={this.state.expenses}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                />
            </Container>
        );
    }
}

export default Wrapper;