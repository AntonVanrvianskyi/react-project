import React from 'react';

const Post = ({post, lift}) => {
    const click = () => {
        lift(post)
      // console.log(post)
    }
    return (
        <div>
            {
                <h3>{post.id}. {post.title}</h3>

            }
            <button onClick={click}>Click</button>
        </div>
    );
};

export default Post;