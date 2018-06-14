export default {

  namespace: 'allocation',

  state: {
    amount: 12,
    configBase: [{
        id: 0,
        title: "平民",
        number: 4,
    }, {
        id: 1,
        title: "狼人",
        number: 4,
    }],
    configGod : [{
        id: 0,
        title: "预言家",
        select: true,
    }, {
        id: 1,
        title: "女巫",
        select: true,
    }, {
        id: 2,
        title: "猎人",
        select: true,
    }, {
        id: 3,
        title: "白痴",
        select: true,
    }, {
        id: 4,
        title: "守卫",
        select: false,
    }, {
        id: 5,
        title: "白狼王",
        select: false,
    }, {
        id: 6,
        title: "骑士",
        select: false,
    }, {
        id: 7,
        title: "替罪羊",
        select: false,
    }, {
        id: 8,
        title: "长老",
        select: false,
    }, {
        id: 9,
        title: "盗贼",
        select: false,
    }, {
        id: 10,
        title: "丘比特",
        select: false,
    }, {
        id: 11,
        title: "野孩子",
        select: false,
    }, {
        id: 12,
        title: "小女孩",
        select: false,
    }, {
        id: 13,
        title: "驯熊师",
        select: false,
    }, {
        id: 14,
        title: "吹笛者",
        select: false,
    }, {
        id: 15,
        title: "纵火者",
        select: false,
    }, {
        id: 16,
        title: "白狼",
        select: false,
    }, {
        id: 17,
        title: "乌鸦",
        select: false,
    }, {
        id: 18,
        title: "狼狗",
        select: false,
    }, {
        id: 19,
        title: "大野狼",
        select: false,
    }, {
        id: 20,
        title: "种狼",
        select: false,
    }, {
        id: 21,
        title: "两姊妹",
        select: false,
    }, {
        id: 22,
        title: "三兄弟",
        select: false,
    }, {
        id: 23,
        title: "狐狸",
        select: false,
    }, {
        id: 24,
        title: "种狼",
        select: false,
    }, {
        id: 25,
        title: "口吃法官",
        select: false,
    }, {
        id: 26,
        title: "锈剑骑士",
        select: false,
    }, {
        id: 27,
        title: "天使",
        select: false,
    }, {
        id: 28,
        title: "火狼",
        select: false,
    }]
  },

  reducers: {
    save (state, {payload: configBase, configGod}) {
        let amount = configBase[0].number + configBase[1].number;
        configGod.forEach(item => {
            if(item.select) amount++
        });
        return {
            ...state,
            configBase,
            configGod,
            amount: amount
        }
    }
  },

};
