import React from 'react';

const Post = ({post}) => {
    const click = () => {
      console.log(post)
    }
    return (
        <div>
            {
                <h1>{post.title}</h1>

            }
            <button onClick={click}>Click</button>
        </div>
    );
};

export default Post;