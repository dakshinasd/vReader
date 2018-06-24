const state = {
    feeds: [
      {
        title: "",
        url: "https://www.economist.com/sections/business-finance/rss.xml"
      },
      {
        title: "",
        url: "https://www.nasa.gov/rss/dyn/breaking_news.rss"
      }
    ]
  }

  const getters = {
      getFeeds : state => {
          return state.feeds;
      }
  }
  
  const mutations = {
    ADD_FEED (state, feed) {
      state.feeds.push(feed)
    }
  }
  
  const actions = {
    addFeed ({ commit }, feed) {
      // do something async
      commit('ADD_FEED', feed)
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }
  