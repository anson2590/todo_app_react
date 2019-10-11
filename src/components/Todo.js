import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            values: []
        };
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    textChangeHandler = event => {
        this.setState({
            text: event.target.value
        });
    }
    
    addHandler = (e) => {
        let t = [...this.state.values, {id: Math.random() * 2, value: this.state.text}]
        this.setState({
            values: t
        });
    }

    deleteHandler = (id) => {
        let newVal = [];
        this.state.values.map(val => {
            if(!(val.id === id)) {
                newVal.push(val);
            }
        })

        this.setState({
            values: newVal
        })
    }


    render() {
        let item = [];
        const { values } = this.state

        values.map(val => {
            item.push(<li class="collection-item" onMouseDown={() => this.deleteHandler(val.id)} key={val.id}>{val.value}</li>)
        })

        return(
            <div class="row">
                <div class="s12 center">
                    <h4 class="card-panel teal lighten-2 center">Todo Application</h4>
                </div>
                <div class="container">
                    <ul class="collection">
                        {item}
                    </ul>
                </div>
                <div  class="container input-field">
                    <input type="text" class="validate" onChange={this.textChangeHandler}></input>
                </div>
                <div class="container">
                    <button onClick={this.addHandler}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Todo;