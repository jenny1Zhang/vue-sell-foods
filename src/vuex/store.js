import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  orderLists: [
    {
      id: '0005',
      shopId: '000001',
      img: require('../assets/img/order1.png'),
      shopName: '这儿有家冒菜(动物园店)',
      status: '正在送餐中',
      time: '2019-01-18 11:45',
      foodName: '招牌千层毛肚冒菜+米饭+饮料',
      price: '46'
    },
    {
      id: '0004',
      shopId: '000002',
      img: require('../assets/img/order2.png'),
      shopName: '驴肉火烧过桥米线(西直门店)',
      status: '订单已送达',
      time: '2019-01-05 12:40',
      foodName: '驴肉火烧等2件商品',
      price: '16.0'
    },
    {
      id: '0003',
      shopId: '000005',
      img: require('../assets/img/shop3.png'),
      shopName: '田老师红烧肉（白石桥店）',
      status: '订单已送达',
      time: '2018-12-10 12:35',
      foodName: '招牌红烧肉饭一份',
      price: '17.0'
    },
    {
      id: '0002',
      shopId: '000001',
      img: require('../assets/img/order1.png'),
      shopName: '这儿有家冒菜(动物园店)',
      status: '订单已送达',
      time: '2018-11-22 12:20',
      foodName: '招牌千层毛肚冒菜+米饭+饮料',
      price: '17.3'
    },
    {
      id: '0001',
      shopId: '000002',
      img: require('../assets/img/order2.png'),
      shopName: '驴肉火烧过桥米线(西直门店)',
      status: '订单已送达',
      time: '2018-09-09 12:15',
      foodName: '鱼丸米线',
      price: '14.0'
    }
  ],
  shopLists: [
    {
      id: '000001',
      img: require('../assets/img/order1.png'),
      shopName: '这儿有家冒菜(动物园店)',
      score: 4.9,
      sell_num: 419,
      send_special: true,
      send_start: 20,
      send_num: 5,
      send_time: 21,
      distance: 928,
      label1: '春季外卖节',
      label2: ['冒菜', '品质联盟'],
      label3: '',
      promotions: '满25减4，满40减7，满75减13，满100减20',
      promotion_num: 5,
      isMember: true
    },
    {
      id: '000002',
      img: require('../assets/img/order2.png'),
      shopName: '驴肉火烧过桥米线(西直门店)',
      score: 4.5,
      sell_num: 291,
      send_special: false,
      send_start: 20,
      send_num: 5,
      send_time: 40,
      distance: 1598,
      label1: '',
      label2: ['米线', '品质联盟'],
      label3: '口碑人气好店',
      promotions: '满25减6，满45减13',
      promotion_num: 3,
      isMember: false
    },
    {
      id: '000003',
      img: require('../assets/img/shop1.png'),
      shopName: '权金城.烤串.拌饭(北京西直门店)',
      score: 4.7,
      sell_num: 1165,
      send_special: false,
      send_start: 60,
      send_num: 6,
      send_time: 42,
      distance: 2140,
      label1: '春季外卖节',
      label2: ['日韩料理', '品质联盟'],
      label3: '口碑人气好店',
      promotions: '满10减7，满55减18，满90减30，满120减40',
      promotion_num: 6,
      isMember: true
    },
    {
      id: '000004',
      img: require('../assets/img/shop2.png'),
      shopName: '多乐之日(西直门外店)',
      score: 4.9,
      sell_num: 507,
      send_special: true,
      send_start: 20,
      send_num: 5,
      send_time: 27,
      distance: 978,
      label1: '春季外卖节',
      label2: ['蛋糕', '品质联盟'],
      label3: '',
      promotions: '满25减4，满40减7，满75减13，满100减20',
      promotion_num: 5,
      isMember: true
    },
    {
      id: '000005',
      img: require('../assets/img/shop3.png'),
      shopName: '田老师红烧肉(海淀交大店)',
      score: 4.5,
      sell_num: 2044,
      send_special: true,
      send_start: 20,
      send_num: 5.5,
      send_time: 45,
      distance: 1890,
      label1: true,
      label2: ['简餐', '品质联盟'],
      label3: true,
      promotions: '满25减7，满50减20，满100减35',
      promotion_num: 3,
      isMember: true
    },
    {
      id: '000006',
      img: require('../assets/img/shop4.png'),
      shopName: '和合谷(西直门阳光店)',
      score: 4.8,
      sell_num: 2204,
      send_special: true,
      send_start: 20,
      send_num: 5,
      send_time: 20,
      distance: 42,
      label1: true,
      label2: ['地方小吃', '品质联盟'],
      label3: true,
      promotions: '满25减7，满40减20，满70减28',
      promotion_num: 5,
      isMember: true
    },
    {
      id: '000007',
      img: require('../assets/img/shop5.png'),
      shopName: '麦当劳(西直门阳光店)',
      score: 4.8,
      sell_num: 3082,
      send_special: false,
      send_start: 20,
      send_num: 9,
      send_time: 28,
      distance: 678,
      label1: false,
      label2: ['汉堡', '品质联盟'],
      label3: '',
      promotions: '满49减10，满65减20，满90减28',
      promotion_num: 5,
      isMember: false
    },
    {
      id: '000008',
      img: require('../assets/img/shop6.png'),
      shopName: '云海肴云南菜(西直门店)',
      score: 4.6,
      sell_num: 1001,
      send_special: true,
      send_start: 20,
      send_num: 1,
      send_time: 21,
      distance: 978,
      label1: true,
      label2: ['云南菜', '品质联盟'],
      label3: true,
      promotions: '满25减4，满40减7，满75减13，满100减20',
      promotion_num: 5,
      isMember: true
    }
  ],
  addressLists: [
    {
      id: '01',
      username: 'ZHZ',
      sex: '女士',
      phone: '18600580545',
      address: '阳光大厦(西直门外大街辅路)北京市西城区西直门外大街112号401'
    },
    {
      id: '02',
      username: '张三',
      sex: '男士',
      phone: '181013790545',
      address: '阳光大厦北京市西城区西直门外大街210号1915'
    },
    {
      id: '03',
      username: 'ZHZ',
      sex: '女士',
      phone: '18600580545',
      address: '阳光大厦(西直门外大街辅路)北京市西城区西直门外大街112号508'
    },
    {
      id: '04',
      username: 'ZHZ',
      sex: '女士',
      phone: '18600580545',
      address: '中糖大厦(西直门外大街辅路)北京市西城区西直门外大街111号1209'
    },
    {
      id: '05',
      username: '张三',
      sex: '男士',
      phone: '181013790545',
      address: '阳光大厦北京市西城区西直门外大街112号201'
    },
    {
      id: '03',
      username: 'ZHZ',
      sex: '女士',
      phone: '18600580545',
      address: '阳光大厦(西直门外大街辅路)北京市西城区西直门外大街112号508'
    },
    {
      id: '04',
      username: 'ZHZ',
      sex: '女士',
      phone: '18600580545',
      address: '中糖大厦(西直门外大街辅路)北京市西城区西直门外大街111号1209'
    },
    {
      id: '05',
      username: '张三',
      sex: '男士',
      phone: '181013790545',
      address: '阳光大厦北京市西城区西直门外大街112号201'
    }
  ],
  orderDetailsLists: [
    {
      id: '0001',
      orderStatus: true,
      shopImg: require('../assets/img/order2.png'),
      shopName: '驴肉火烧过桥米线(西直门店)',
      foods: [
        {
          name: '鱼丸米线/微辣',
          num: 1,
          price: 23,
        }
      ],
      boxPrice: 1,
      boxNum: 1,
      sendPrice: 2,
      discount: 8,
      redPacket: 4,
      reallyPay: 16,
      sendTime: '尽快送达',
      sendAddress: ['ZHZ','18600780323','阳光大厦北京市西城区西直门外大街112号401'],
      sendType: '蜂鸟快送',
      sender: '张三',
      orderNum: '订单号：1229943120091208290',
      payType: '在线支付',
      payTime: '2018-09-09 12:15',
      orderText: ''
    },
    {
      id: '0002',
      orderStatus: true,
      shopImg: require('../assets/img/order1.png'),
      shopName: '这儿有家冒菜（动物园店）',
      foods: [
        {
          name: '招牌千层毛肚冒菜+芝麻酱+米饭+听饮料/微麻',
          num: 1,
          price: 44,
        },
        {
          name: '招牌牛肉冒菜+芝麻酱+米饭+听饮料/麻辣',
          num: 1,
          price: 42,
        }
      ],
      boxPrice: 2.5,
      boxNum: 1,
      sendPrice: 2,
      discount: 26,
      redPacket: 5.2,
      reallyPay: 17.3,
      sendTime: '尽快送达',
      sendAddress: ['ZHZ','18600780323','阳光大厦北京市西城区西直门外大街112号401'],
      sendType: '蜂鸟快送',
      sender: '张三',
      orderNum: '订单号：1229943990091208290',
      payType: '在线支付',
      payTime: '2019-01-15 11:44',
      orderText: '不要香菜,可乐，谢谢/1份餐具'
    },
    {
      id: '0003',
      orderStatus: true,
      shopImg: require('../assets/img/shop3.png'),
      shopName: '田老师红烧肉（白石桥店）',
      foods: [
        {
          name: '招牌红烧肉饭一份',
          num: 1,
          price: 42,
        }
      ],
      boxPrice: 2,
      boxNum: 1,
      sendPrice: 2,
      discount: 21,
      redPacket: 5.2,
      reallyPay: 17,
      sendTime: '尽快送达',
      sendAddress: ['ZHZ','18600780323','阳光大厦北京市西城区西直门外大街112号401'],
      sendType: '蜂鸟快送',
      sender: '张三',
      orderNum: '订单号：1229943921091208211',
      payType: '在线支付',
      payTime: '2018-12-10 12:35',
      orderText: ''
    },
    {
      id: '0004',
      orderStatus: true,
      shopImg: require('../assets/img/order2.png'),
      shopName: '驴肉火烧过桥米线(西直门店)',
      foods: [
        {
          name: '鱼丸米线/微麻',
          num: 1,
          price: 23,
        },
        {
          name: '焖子火烧',
          num: 1,
          price: 7,
        }
      ],
      boxPrice: 1,
      boxNum: 1,
      sendPrice: 2,
      discount: 12,
      redPacket: 5,
      reallyPay: 16,
      sendTime: '尽快送达',
      sendAddress: ['ZHZ','18600780323','阳光大厦北京市西城区西直门外大街112号401'],
      sendType: '蜂鸟快送',
      sender: '李四',
      orderNum: '订单号：1229943990091207890',
      payType: '在线支付',
      payTime: '2019-01-05 12:40',
      orderText: '不要香菜,谢谢/1份餐具'
    },
    {
      id: '0005',
      orderStatus: true,
      shopImg: require('../assets/img/order1.png'),
      shopName: '这儿有家冒菜（动物园店）',
      foods: [
        {
          name: '招牌千层毛肚冒菜+芝麻酱+米饭+听饮料/微麻',
          num: 1,
          price: 44,
        },
        {
          name: '招牌牛肉冒菜+芝麻酱+米饭+听饮料/麻辣',
          num: 1,
          price: 42,
        }
      ],
      boxPrice: 2.5,
      boxNum: 2,
      sendPrice: 2,
      discount: 40,
      redPacket: 5,
      reallyPay: 46,
      sendTime: '尽快送达',
      sendAddress: ['ZHZ','18600780323','阳光大厦北京市西城区西直门外大街112号401'],
      sendType: '蜂鸟快送',
      sender: '郭宁',
      orderNum: '订单号：1229943990061208290',
      payType: '在线支付',
      payTime: '2019-01-18 11:44',
      orderText: '不要香菜,饮料要七喜，谢谢/2份餐具'
    }
  ],
  shopDetailLists: [
    {
      id: '000001',
      name: '这儿有家冒菜（动物园店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/order1.png'),
      score: 4.8,
      sell_num: 507,
      send_time: 36,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/order1.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/order1.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/order1.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/order1.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/order1.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/order1.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/order1.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/order1.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/order1.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/order1.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/order1.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000002',
      name: '驴肉火烧过桥米线（西直门店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/order2.png'),
      score: 4.8,
      sell_num: 507,
      send_time: 36,
      promotions: '满25减4，满40减7',
      promotion_num: 4,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/order2.png'),
                name: '牛肉米线',
                text: '牛肉米线',
                sellNum: 507,
                grade: '95%',
                price: '29',
                num: 0
              },
              {
                img: require('../assets/img/order2.png'),
                name: '鱼丸米线',
                text: '鱼丸米线',
                sellNum: 519,
                grade: '95%',
                price: '23',
                num: 0
              },{
                img: require('../assets/img/order2.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/order2.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/order2.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/order2.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/order2.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/order2.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/order2.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/order2.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/order2.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000003',
      name: '权金城.烤串.拌饭（北京西直门店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop1.png'),
      score: 4.8,
      sell_num: 1165,
      send_time: 42,
      promotions: '满25减4，满40减7',
      promotion_num: 6,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop1.png'),
                name: '烤牛肉拌饭',
                text: '烤牛肉拌饭',
                sellNum: 507,
                grade: '95%',
                price: '38',
                num: 0
              },
              {
                img: require('../assets/img/shop1.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop1.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop1.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop1.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop1.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop1.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop1.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop1.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop1.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop1.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000004',
      name: '多乐之日（西直门外店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop2.png'),
      score: 4.8,
      sell_num: 507,
      send_time: 36,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop2.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/shop2.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop2.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop2.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop2.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop2.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop2.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop2.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop2.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop2.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop2.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000005',
      name: '田老师红烧肉（海淀交大店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop3.png'),
      score: 4.5,
      sell_num: 2044,
      send_time: 45,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodimg: require('../assets/img/shop3.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodimg: require('../assets/img/shop3.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodimg: require('../assets/img/shop3.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodimg: require('../assets/img/shop3.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop3.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/shop3.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop3.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop3.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop3.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop3.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop3.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop3.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop3.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop3.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop3.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000006',
      name: '和合谷（西直门阳光店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop4.png'),
      score: 4.8,
      sell_num: 1507,
      send_time: 20,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop4.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/shop4.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop4.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop4.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop4.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop4.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop4.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop4.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop4.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop4.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop4.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000007',
      name: '麦当劳（西直门阳光店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop5.png'),
      score: 4.8,
      sell_num: 2507,
      send_time: 28,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop5.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/shop5.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop5.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop5.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop5.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop5.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop5.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop5.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop5.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop5.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop5.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    },
    {
      id: '000008',
      name: '云海肴云南菜（西直门店）',
      shopImg: require('../assets/img/shop_adv.png'),
      backgroundImg: require('../assets/img/shop6.png'),
      score: 4.6,
      sell_num: 507,
      send_time: 36,
      promotions: '满25减4，满40减7',
      promotion_num: 5,
      notice: '',
      order: {
        recommend: [
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          },
          {
            foodImg: require('../assets/img/order1.png'),
            foodName: '招牌千层毛肚冒菜',
            saleNum: 507,
            grade: '95%',
            price: 38.5
          }
        ],
        foodList:{
          sell_hot: {
            index: 0,
            name: '热销',
            title: '大家喜欢吃，才叫真好吃',
            data: [
              {
                img: require('../assets/img/shop6.png'),
                name: '招牌千层毛肚冒菜',
                text: '精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜,精选毛肚，新鲜蔬菜',
                sellNum: 507,
                grade: '95%',
                price: '38.5',
                num: 0
              },
              {
                img: require('../assets/img/shop6.png'),
                name: '招牌牛肉冒菜',
                text: '精选牛肉，新鲜健康的蔬菜',
                sellNum: 519,
                grade: '95%',
                price: '40',
                num: 0
              },{
                img: require('../assets/img/shop6.png'),
                name: '招牌午餐肉冒菜',
                text: '招牌午餐肉冒菜',
                sellNum: 101,
                grade: '95%',
                price: '34',
                num: 0
              },{
                img: require('../assets/img/shop6.png'),
                name: '金针菇肥牛冒菜',
                text: '金针菇肥牛冒菜',
                sellNum: 356,
                grade: '95%',
                price: '36',
                num: 0
              },{
                img: require('../assets/img/shop6.png'),
                name: '菌菇什锦冒菜',
                text: '菌菇什锦冒菜',
                sellNum: 195,
                grade: '95%',
                price: '32',
                num: 0
              },{
                img: require('../assets/img/shop6.png'),
                name: '精品鸭血冒菜',
                text: '精品鸭血冒菜',
                sellNum: 507,
                grade: '95%',
                price: '33',
                num: 0
              },
              {
                img: require('../assets/img/shop6.png'),
                name: '精品巴沙鱼冒菜',
                text: '精品巴沙鱼冒菜',
                sellNum: 407,
                grade: '95%',
                price: '35',
                num: 0
              }
            ]
          },
          sale: {
            index: 1,
            name: '优惠',
            title: '美味又实惠，大家快来抢',
            data: [
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌千层毛肚冒菜',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌牛肉冒菜',
                  text: '精选牛肉，新鲜健康的配菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '精品巴沙鱼冒菜',
                  text: '精品巴沙鱼冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌午餐肉冒菜',
                  text: '招牌午餐肉冒菜',
                  sellNum: 507,
                  discount: 8,
                  price: 36,
                  price_pre: 45,
                  num: 0
                }
              ]
          },
          choice_combo:{
            index: 2,
            name: '精选套餐',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌千层毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '45.5',
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌千层毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '招牌千层毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '43',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '招牌牛肉毛肚冒菜+橙汁',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '48',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '招牌牛肉毛肚冒菜+可乐',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '招牌牛肉毛肚冒菜+雪碧',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '46',
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '招牌牛肉毛肚冒菜+牛肉饼',
                  text: '精选毛肚，新鲜蔬菜',
                  sellNum: 507,
                  grade: '95%',
                  price: '47',
                  num: 0
                }
              ]
          },
          single_staple_food:{
            index: 3,
            name: '单点主食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop6.png'),
                  name: '米饭',
                  text: '泰国香米',
                  sellNum: 307,
                  grade: '95%',
                  price: '4',
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '手擀面',
                  text: '手工擀面，面更劲道',
                  sellNum: 140,
                  grade: '95%',
                  price: '4',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '馒头',
                  text: '精选小麦粉',
                  sellNum: 93,
                  grade: '95%',
                  price: '3',
                  num: 0
                }
              ]
          },
          sweetmeats: {
            index: 4,
            name: '甜品小食',
            title: '',
            data: [
                {
                  img: require('../assets/img/shop6.png'),
                  name: '烤鸡翅',
                  text: '烤鸡翅',
                  sellNum: 157,
                  grade: '95%',
                  price: '14',
                  num: 0
                },
                {
                  img: require('../assets/img/shop6.png'),
                  name: '炸鸡柳',
                  text: '炸鸡柳',
                  sellNum: 57,
                  grade: '90%',
                  price: '11',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '牛肉饼',
                  text: '很好吃很好吃很好吃的牛肉饼',
                  sellNum: 98,
                  grade: '96%',
                  price: '9',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '橙汁',
                  text: '选用新鲜的橙子榨汁',
                  sellNum: 57,
                  grade: '95%',
                  price: '10',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '可乐',
                  text: '可乐',
                  sellNum: 27,
                  grade: '95%',
                  price: '7',
                  num: 0
                },{
                  img: require('../assets/img/shop6.png'),
                  name: '雪碧',
                  text: '雪碧',
                  sellNum: 35,
                  grade: '95%',
                  price: '7',
                  num: 0
                }
              ]
          }
        }
      },
      evaluate: {
        score: 4.8,
        taste_score: 4.8,
        pack_score: 4.8,
        send_score: 4.8
      },
      shoper: {
        sendInfo: {
          sendText: '由商家配送提供配送，约36分钟送达，距离534m',
          sendPrice: 8
        }
      }
    }
],
  scoreLists: {
    liList: [{
      name: '全部',
      num: '35'
    },{
      name: '最新',
      num: ''
    },{
      name: '好评',
      num: '10'
    },{
      name: '差评',
      num: '5'
    },{
      name: '有图',
      num: '3'
    }],
    scoLists: [[
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.8,
        grade: '超赞',
        time: '2019-01-08',
        text: '非常好吃',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '较差',
        time: '2019-02-24',
        text: '配送员态度非常差',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '18*******99',
        score: 1.0,
        grade: '吐槽',
        time: '2019-02-10',
        text: '非常难吃',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 3.5,
        grade: '较差',
        time: '2019-02-24',
        text: '',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '18*******38',
        score: 4.0,
        grade: '满意',
        time: '2018-11-24',
        text: '很满意',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '较差',
        time: '2019-02-24',
        text: '配送员态度非常差',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.8,
        grade: '超赞',
        time: '2019-01-08',
        text: '非常好吃',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '较差',
        time: '2019-02-24',
        text: '配送员态度非常差',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '较差',
        time: '2019-02-24',
        text: '配送员态度非常差',
        img: ''
      }
    ],[
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.3,
        grade: '满意',
        time: '2019-02-24',
        text: '还不错',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '差',
        time: '2019-02-24',
        text: '配送太慢了',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 3.5,
        grade: '较差',
        time: '2019-02-18',
        text: '配送员态度非常差',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score:3.9,
        grade: '较差',
        time: '2019-02-10',
        text: '',
        img: require('../assets/img/order1.png')
      }
    ],[
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score:4.4,
        grade: '满意',
        time: '2019-02-12',
        text: '口味不错',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.5,
        grade: '超赞',
        time: '2019-01-14',
        text: '',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '18*******45',
        score: 4.1,
        grade: '满意',
        time: '2019-01-04',
        text: '味道还不错，稍微有点久',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '18*******01',
        score: 4.8,
        grade: '超赞',
        time: '2019-01-02',
        text: '',
        img: ''
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.9,
        grade: '超赞',
        time: '2019-02-24',
        text: '很不错',
        img: ''
      }
    ],[
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 1,
        grade: '吐槽',
        time: '2019-02-15',
        text: '很难吃，而且配送员态度非常差',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.0,
        grade: '差',
        time: '2019-01-24',
        text: '配送太慢了',
        img: ''
      }
    ],[
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '18*******79',
        score: 4.7,
        grade: '超赞',
        time: '2019-02-24',
        text: '味道很不错哦，配送也挺快的',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 2.5,
        grade: '较差',
        time: '2019-01-28',
        text: '配送员态度非常差',
        img: require('../assets/img/order1.png')
      },
      {
        userImg: require('../assets/img/userImg.png'),
        userName: '匿名用户',
        score: 4.0,
        grade: '满意',
        time: '2018-11-24',
        text: '配送员态度非常差',
        img: require('../assets/img/order1.png')
      }
    ]]
  }
}

export default new Vuex.Store({
  state
})
