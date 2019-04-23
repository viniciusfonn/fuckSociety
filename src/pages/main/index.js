import React, { Component } from 'react';
import api from '../../services/api';
import {Link } from 'react-router-dom';

import './style.css';

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
            <div className="itemList">
                {items.map(item => (
                    <article  key={item._id}>   
                    <h2>{item.title}</h2>
                    <Link to={`/products/${item._id}`}>Ver plano</Link>
                    </article>
                ))}
            </div>
        )
    }
}
                    // <h2 key={item._id}>{item.name}</h2>
