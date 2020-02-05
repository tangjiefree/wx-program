import {indexMiddle, indexHot} from '../../utils/mock.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardIndex: 0,
    bannerList: ['http://img1.imgtn.bdimg.com/it/u=4202388950,118473981&fm=26&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=3075048587,728988847&fm=26&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=1685278417,4282245362&fm=11&gp=0.jpg'],
    free_lesson_list: [],
    stateArr: ['免费', '收费'],
    hotLessonArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 免费公开课
    var backupArr = indexMiddle;
    backupArr.forEach(item => {
      item._source.cms_content_type_remark = JSON.parse(item._source.cms_content_type_remark)
    })
    this.setData({ free_lesson_list: backupArr })
    // 热门课程
    var backupArrTwo = indexHot;
    backupArrTwo.forEach(item => {
      item._source.cms_content_type_remark = JSON.parse(item._source.cms_content_type_remark)
      item._source.cms_content_type_remark.teacherId = JSON.parse(item._source.cms_content_type_remark.teacherId)
    })
    this.setData({ hotLessonArr: backupArrTwo })
    console.log(this.data.hotLessonArr)
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
  cardSwiper: function(e) {
    this.setData({
      cardIndex: e.detail.current
    })
  },
  goDetail: function(e) {
      wx.navigateTo({
        url: '../detail/detail?detail=' + encodeURIComponent(JSON.stringify(e.currentTarget.dataset.detail)),
      })
  },
  showModal(e) {
    console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

})