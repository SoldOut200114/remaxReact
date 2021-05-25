import * as React from 'react';
import * as styles from './index.css';
import { View } from 'remax/one';

export default (props) => {
    let startX, startY, endX, endY;

    function touchStart(e) {
        e.stopPropagation();
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    }

    function tuochEnd(e) {
        e.stopPropagation();

        endX = e.originalEvent.changedTouches[0].pageX;
        endY = e.originalEvent.changedTouches[0].pageY;

        if (startY - endY > 0) {
            console.log(1);
        } else {
            props.onClose();
        }
    }

    return (
        <View onClick={props.onClose} className={[styles.popup, props.open ? styles.show : styles.hide].join(' ')}>
            <View onClick={(e) => e.stopPropagation()} className={styles.section}>
                <View onTouchEnd={tuochEnd} onTouchStart={touchStart}>
                    title
                </View>
                popup 组件
            </View>
        </View>
    );
};
