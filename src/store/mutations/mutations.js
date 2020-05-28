export const selectedFilters = (state, selectedFilters) => {
  state.selectedFilters = selectedFilters
}

export const characters = (state, characters) => {
  state.characters = characters;
  state.filteredCharacters = characters;
  console.log (state)
}
export const prevPage = (state, prev) => {
  state.prev = prev;
}
export const nextPage = (state, next) => {
  state.next = next;
}
