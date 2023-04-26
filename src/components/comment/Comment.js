import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {name, id} = this.props.comment
        return(
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
            </div>
        )
    }
}
export {Comment}