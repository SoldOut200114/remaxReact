import * as React from 'react';
import * as styles from './index.css';
import { Button } from 'remax/one';

export default (props) => {
    console.log(props);
    return (
        <Button className={styles[props.type] || styles['btn-primary']} onClick={props.onTap}>
            {props.children || '按钮'}
        </Button>
    );
};
