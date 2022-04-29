import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class FilterSearch extends Component {
    state = {}
    render() {
        return (
            <Form>
                <Form.Group>
                    <div className='d-flex flex-row-reverse'>
                        <Form.Control
                            type="input"
                            placeholder="Search expense"
                            name="search"
                            onChange={(e) => this.props.handleSearch(e.target.value)}
                        />
                    </div>
                </Form.Group >
            </Form >
        );
    }
}

export default FilterSearch;