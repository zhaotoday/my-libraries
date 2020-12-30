export default ({ types }) => {
  return {
    [types.GetList](state, payload) {
      state.list = payload.data;
    },
    [types.GetDetail](state, payload) {
      state.detail = payload.data;
    }
  };
};
