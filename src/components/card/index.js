import * as React from 'react';
import * as styles from './index.css';
import { View } from 'remax/one';

export default (props) => {
    console.log(props);
    return (
        <View onClick={props.onTap} className={styles.card}>
            <View className={styles.cover}>
                {props.cover}
            </View>
            <View className={styles.header}>
                <View>
                    <View className={styles.title}>{props.title}</View>
                    <View className={styles.description}>{props.description}</View>
                </View>
                <View className={styles.status}>
                    {props.status}
                </View>
            </View>
            <View className={styles.section}>
                {props.children}
            </View>
            {props.foot ? <View className={styles.footer}>
                {props.foot}
            </View> : ''}
        </View>
    );
};
