import Vuex from 'vuex';

export default () => new Vuex.Store({
  state: {
    currentNav: null,
    navSections: [],
  },

  mutations: {
    addSection(state, {name, label}) {
      state.navSections.push({name, label});
    },

    removeSection(state, name) {
      state.navSections = state.navSections.filter(x => x.name !== name);
    },

    updateSection(state, {name, newValues}) {
      const section = state.navSections.find(x => x.name === name);
      Object.keys(newValues).forEach((k) => {
        section[k] = newValues[k];
      });
    },
  },
});
