import axios from 'axios';
export const updateCheckedFilters = ({ dispatch, commit, state }) => {
  let selectedFilters = {};
  for (let key in state.filters) {
    let filterItem = state.filters[key];
    let selectedKey = filterItem
      .filter(obj => obj.selected == true)
      .map(obj => obj.value);
    if (selectedKey.length > 0) {
      selectedFilters[key] = selectedKey;
    }
  }
  console.log('selectedFilters', selectedFilters);
  commit('selectedFilters', selectedFilters);
}



export const getCharacters = ({ dispatch, commit, state }, args) => {
  let url = state.url;
  if (args && args.url ) {
    url = params.url.concat("&");
  }
  console.log('url for axios is', url);
  axios.get(url)
      .then(res => {
          commit('prevPage', res.data.info.prev);
          commit('nextPage', res.data.info.next);
          commit('characters', res.data.results);
      })
      .catch(error => {
          console.log(error);
      });
}


