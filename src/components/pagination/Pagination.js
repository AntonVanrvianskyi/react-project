import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Paginate.module.css'
import {postActions} from "../../redux";
import {NavLink} from "react-router-dom";

const Pagination = ({total}) => {

    const {currentPerPage} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const pageNumbers = [];

    for (let i = 1; i <=Math.ceil(total/currentPerPage) ; i++) {
        pageNumbers.push(i)

    }
    return (
        <div className={css.BlockLi}>
            {
                pageNumbers.map(number=><li key={number} className={css.li}><NavLink onClick={()=>dispatch(postActions.setCurrentPage(number))}>{number}</NavLink></li>)
            }
        </div>
    );
};

export default Pagination;