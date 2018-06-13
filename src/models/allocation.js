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
