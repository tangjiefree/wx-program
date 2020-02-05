// pages/flash/flash.js
import {flash1, flash2, flash3} from '../../utils/mock.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardIndex: 0,
    curindex: 0,
    bannerList: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1602162625,838369988&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2411212003,492390571&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4088893111,626471721&fm=26&gp=0.jpg'],
    middleArr: [
      { time: '小贝推荐', status: '暂无', code: 0, id: 1},
      { time: '露露推荐', status: '经久不衰', code: 1, id: 2},
      { time: '小天推荐', status: '悬疑', code: 1, id: 3},
      { time: '咪咪推荐', status: '热血', code: 1, id: 4},
      { time: '皮皮推荐', status: '暂无', code: 0, id: 5}
    ],
    listArr: [],
    flash1: [],
    flash2: [],
    flash3: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      curindex: 2,
      listArr: flash1,
      flash1: flash1,
      flash2: flash2,
      flash3: flash3,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //cardSwiper
  cardSwiper: function (e) {
    this.setData({
      cardIndex: e.detail.current
    })
  },
  // 切换标题
  changeTitle: function(e) {
    if(e.currentTarget.dataset.code === 0) {
      return;
    }
    else {
      this.setData({
        curindex: e.currentTarget.dataset.id,
        listArr: this.data[`flash${e.currentTarget.dataset.id-1}`]
      })
    }
  }
})