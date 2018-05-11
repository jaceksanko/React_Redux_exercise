import React from 'react';


class CommentInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }

        this.hendleChange = this.hendleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hendleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addComment(this.state.value);
        this.setState({
            value: ''
          });
        
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" value={this.state.value} onChange={this.hendleChange}/> 
            </label>
            <input type="submit" value="Submit" />
                
            </form>
           
        )
    }
}

export default CommentInput
