// pages/message/message.js
var app = getApp();
import mockMessage from '../../utils/mock.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin: false,
    messageArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    if (app.globalData.userInfo) {
      this.setData({
        islogin: true
      })
      this.setData({
        messageArr: mockMessage.mockMessage
      })
    }
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
  dealmessage: function(e) {
    console.log(e)
    var newArr = this.data.messageArr;
    newArr.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      messageArr: newArr
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    })
  }
})