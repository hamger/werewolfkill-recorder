export default {

  namespace: 'record',

  state: {
    voteStatus: false,
    notes: [{
        id: 0,
        vote: [{
          active: false,
          voter: '',
          votee: '',
        }]
      }, {
        id: 1,
        vote: [{
          active: false,
          voter: '',
          votee: '',
        }]
      }]
  },

  reducers: {
    changeVoteStatus (state, {payload: status}) {
      return {
        ...state,
        voteStatus: status
      }
    }
  },

};

