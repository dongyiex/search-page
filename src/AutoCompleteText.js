import React from 'react';
import axios from 'axios';
import './AutoCompleteText.css';

const api = 'https://3vxgyqmlze.execute-api.us-east-2.amazonaws.com/default/products';

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = []; 

        axios.get(api).then( res => {
            this.items = res.data;
            console.log(res);
        })
        // this.items = [];
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        console.log(value);
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            // console.log(this.items.values());
            suggestions = this.items.sort().filter(v => regex.test(v));
            console.log(suggestions);
        } 
        this.setState(() => ({ suggestions, text: value }));
    }
    suggestionSeleted(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))

    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSeleted(item)}>{item}</li>)}
            </ul>
        );
    }

    render () {
        const { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}