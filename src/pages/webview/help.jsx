import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Attention extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/users/help_list'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '帮助中心',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Attention
