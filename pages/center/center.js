// pages/center/center.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconArr: [
      { name: '今日推荐', img: '../../images/icon-1.png', id: 1},
      { name: '推荐动漫', img: '../../images/icon-3.png', id: 3},
      { name: '动漫简讯', img: '../../images/icon-4.png', id: 4}
    ],
    coverImg: '../../images/cover.png',
    coverText: '立即登录',
    modalName: null,
    tips: '发现问题可以联系qq:465906939',
    modelImg: 'http://img0.imgtn.bdimg.com/it/u=1082433990,3267638218&fm=26&gp=0.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        coverImg: app.globalData.userInfo.avatarUrl,
        coverText: app.globalData.userInfo.nickName
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(app.userInfo)
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
  showModal(e) {
    console.log(e.currentTarget.dataset.id)
    switch (+e.currentTarget.dataset.id) {
      case 1:
        this.setData({
          modalName: e.currentTarget.dataset.target,
          tips: '魔法的禁书目录',
          modelImg: 'http://img2.imgtn.bdimg.com/it/u=3334080089,2109346027&fm=26&gp=0.jpg'
        })
        break;
      case 3:
        wx.switchTab({
          url: '../flash/flash',
        });
        break;
      case 4:
        wx.switchTab({
          url: '../message/message',
        })
        break;
      case 5:
        wx.showToast({
          title: '当前版本号3.0',
          icon: 'success',
          duration: 2000
        })
        break;
      default: 
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
        break;
    }
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})