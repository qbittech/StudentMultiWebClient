import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Guide extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/guide_detail'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '上课指南',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Guide
