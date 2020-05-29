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
  dispatch('applyFilters');
}



export const getCharacters = ({ dispatch, commit, state }, args) => {
  let url = state.url;
  if (args && args.url ) {
    url = args.url.concat("&");
  }
  console.log('url for axios is', url);
  axios.get(url)
      .then(res => {
          commit('prevPage', res.data.info.prev);
          commit('nextPage', res.data.info.next);
          commit('characters', res.data.results);
          dispatch('applyFilters');
      })
      .catch(error => {
          console.log(error);
      });
}

export const applyFilters = ({ commit, state }) => {

  let filteredCharactersList = state.characters,
      selectedFilters = state.selectedFilters,
      characters = state.characters,
      filter = [];
      console.log(selectedFilters);

      if (selectedFilters.species && selectedFilters.species.length) {
        filter = selectedFilters.species;
        if (filter.includes('other')) {
            filteredCharactersList = characters.filter(item => (item.species.toLowerCase() !== 'human' && item.species.toLowerCase() !== 'alien'));
        } else {
            filteredCharactersList = [];
        }
        filter.forEach(el => {
            filteredCharactersList = filteredCharactersList.concat(characters.filter(item => (item.species.toLowerCase() === el.toLowerCase())));
        });
    }

    // apply gender filter
    if (selectedFilters.gender && selectedFilters.gender.length) {
        let tempList = filteredCharactersList.slice();
        filteredCharactersList = [];
        filter = selectedFilters.gender;
        filter.forEach(item => {
            filteredCharactersList = filteredCharactersList.concat(tempList.filter(el => el.gender.toLowerCase() === item.toLowerCase()));
        });
    }

    // apply origin filter
    if (selectedFilters.origin && selectedFilters.origin.length) {
        let tempList = filteredCharactersList.slice();
        filteredCharactersList = [];
        filter = selectedFilters.origin;
        if (filter.includes('Other Origin')) {
            filteredCharactersList = filteredCharactersList.concat(tempList.filter(item => (item.origin.name.toLowerCase() !== 'unknown' && item.origin.name.toLowerCase() !== 'post-apocalyptic earth' && item.origin.name.toLowerCase() !== 'nuptia 4')));
        }
        filter.forEach(el => {
            filteredCharactersList = filteredCharactersList.concat(tempList.filter(item => (item.origin.name.toLowerCase() === el.toLowerCase())));
        });
    }

    if(state.searchName !==''){
      let tempList = filteredCharactersList.slice();
        filteredCharactersList = [];
        filter = state.searchName;
        filteredCharactersList = filteredCharactersList.concat(tempList.filter(item => (item.name.toLowerCase().includes(filter.toLowerCase()))));
    }
  console.log('filteredCharacters', filteredCharactersList);
  commit('filteredCharacters', filteredCharactersList);
}

export const searchByName = ({ dispatch, commit, state }, charName) => {
  commit("characterSearch", charName);
  dispatch("applyFilters");
}
export const sortArrangement = ({ commit, state }, sortOrder) => {
  let characters = state.filteredCharacters;
  if (sortOrder.orderBy === 'asc') {
      characters.sort((a, b) => {
          return a[sortOrder.sortBy] - b[sortOrder.sortBy];
      })
  }
  if (sortOrder.orderBy === 'desc') {
      characters.sort((a, b) => {
          return a[sortOrder.sortBy] - b[sortOrder.sortBy];
      })
      characters.reverse();
  }
  commit("filteredCharacters", characters);
}
