import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import httpRequest from "@/src/utils/request";
import { getGlobalData } from "@/src/utils";
// import noMessage from "@/src/assets/images/no_data/message.png";
import arrowRight from "@/src/assets/images/other/arrow_right.png";
import styles from "./recomm_list.module.scss";

class Message extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      //   isMesRead: 0,
      //   mesNum: 0,
      list: [],
    };
    this.env = process.env.TARO_ENV;
  }
  componentDidMount() {
    httpRequest.get("/api/v1/contents/1/172").then((r) => {
      this.setState({
        list: r.data.value,
      });
    });
  }
  static options = {
    addGlobalClass: true, // 支持组件外部样式，小程序基础库版本 2.2.3 开始支持
  };

  config = {
    navigationBarTitleText: "官方推荐",
  };

  render() {
    const { list } = this.state;

    return (
      <View className={styles["notice"]}>
        <View className={styles["notice-item__container"]}>
          {list.map((item) => (
            <Navigator
              key={item.id}
              url={`/pages/webview/notice_detail?siteId=${item.siteId}&channelId=${item.channelId}&id=${item.id}`}
              className={styles["index__Navigator"]}
            >
              <View className={styles["notice-item"]}>
                {this.state.isNoticeRead === 0 && (
                  <View className={styles["notice-item__status"]}></View>
                )}
                <View className={styles["notice-item__intro-container"]}>
                  <View className={styles["notice-item__maintitle"]}>
                    <Text className={styles["notice-item__maintitle-text"]}>
                      {item.title}
                    </Text>
                  </View>
                  <View className={styles["notice-item__intro"]}>
                    <Text className={styles["notice-item__date-text"]}>
                      {item.lastEditDate}
                    </Text>
                  </View>
                </View>
                <View className={styles["notice-item__pic"]}>
                  <Image
                    src={getGlobalData("businessDomain") + item.imageUrl}
                    className={styles["notice-item__pic-img"]}
                  />
                </View>
                <View className={styles["notice-item__link"]}>
                  <View className={styles["notice-item__link-left"]}>
                    <Text className={styles["notice-item__link-text"]}>
                      查看详情
                    </Text>
                  </View>
                  <View className={styles["notice-item__link-right"]}>
                    <Image
                      src={arrowRight}
                      className={styles["notice-item__link-img"]}
                    />
                  </View>
                </View>
              </View>
            </Navigator>
          ))}

          {/* {this.state.mesNum === 0 ? (
            <View className='global-empty'>
              <View className='global-empty__pic'>
                <Image src={noMessage} className='global-empty__pic-img' />
              </View>
              <View className='global-empty__intro'>
                <Text className='global-empty__text'>暂无消息</Text>
              </View>
            </View>
          ) : (
            <View className={styles["message-item"]}>
              {this.state.isMesRead === 0 && (
                <View className={styles["message-item__status"]}></View>
              )}
              <View className={styles["message-item__intro-container"]}>
                <View className={styles["message-item__intro-maintitle"]}>
                  <Text className={styles["message-item__maintitle"]}>
                    新注册用户畅玩新注册用户畅玩新注册用户畅玩新注册用户畅玩
                  </Text>
                </View>
                <View className={styles["message-item__intro"]}>
                  <Text className={styles["message-item__date-text"]}>
                    2019-08-01 09:30
                  </Text>
                </View>
              </View>
              <View className={styles["message-item__thumb"]}>
                <Text className={styles["message-item__text"]}>
                  只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩
                </Text>
              </View>
            </View>
          )} */}
        </View>
      </View>
    );
  }
}
export default Message;
