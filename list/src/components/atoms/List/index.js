import React from 'react';
import styles from './styles.css';

const List = (props) => (
    <ol>
        <li>{props.list01}</li>
        <li>{props.list02}</li>
        <li>{props.list03}</li>
    </ol>
)

export default List;