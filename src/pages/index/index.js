import * as React from 'react';
import * as styles from './index.css';
import { View, Text, Image } from 'remax/one';
import Card from 'components/card/index';
import Popup from 'components/popup/index';

export default () => {
  const [showPopup, setShowPopup] = React.useState(false);

  function clickCard() {
    setShowPopup(true);
  }

  return (
    <View>
      <Card
        onTap={clickCard}
        title='首页card' 
        description='首页描述'
        cover={<img alt="Anna" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496571732,442429806&fm=26&gp=0.jpg" />}
        status={<View className={styles.status}>🏖</View>}>
        <View>
          Make up,and dressed. Are you ready to go? Weather is great, it's your holiday. We gotta
          party all day long.
        </View>
      </Card>

      <Popup 
        open={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        >
          
      </Popup>
      首页
    </View>
  );
};
