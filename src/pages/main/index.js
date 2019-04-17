import React, { Component } from 'react';
import api from '../../services/api';

import axios from 'axios';


export default class Main extends Component {
    state = {
        items: [],
    }

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        // const response = await api.get('/items');

        // const response = await axios.get('http://localhost:3001/fuck/items');

        const response = await api.get('/products');

        this.setState({ items: response.data.docs });
    }

    render() {
        const {items } = this.state;
        return (
            <div>
                {this.state.items.map(item => (
                    <h2 key={item._id}>{item.title}</h2>
                    // <h2 key={item._id}>{item.name}</h2>
                ))}
            </div>
        )
    }
}
