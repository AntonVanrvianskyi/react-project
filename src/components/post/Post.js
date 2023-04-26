import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        const {userId, title} = this.props.post
        return(
          <div>
              <div>userId: {userId}</div>
              <div>title: {title}</div>
          </div>
        )
    }

}
export {Post}