import * as React from 'react';
import * as styles from './index.css';
import { View } from 'remax/one';
import IconFont from 'components/iconfont';

export default (props) => {
    let endY;
    let [startY, setStartY] = React.useState(0);
    let [iconShow, setIconShow] = React.useState(false);

    function touchStart(e) {
        e.stopPropagation();
        setIconShow(true);
        setStartY(e.originalEvent.changedTouches[0].pageY);
    }

    function tuochEnd(e) {
        e.stopPropagation();

        endY = e.originalEvent.changedTouches[0].pageY;

        if (startY - endY < -10) {
            props.onClose();
        }

        setIconShow(false);
    }

    return (
        <View onClick={props.onClose} className={[styles.popup, props.open ? styles.show : styles.hide].join(' ')}>
            <View onClick={(e) => e.stopPropagation()} className={styles.section}>
                <View className={styles.title} onTouchEnd={tuochEnd} onTouchStart={touchStart}>
                    <View className={[styles.icon, iconShow ? styles.show : ''].join(' ')}>
                        <IconFont name='xiangxia' size={30} color='#1296db'/>
                    </View>
                </View>
                popup 组件
            </View>
        </View>
    );
};
