import {TAG_CLEAR, TAG_TOGGLE, SEARCH_TEXT} from "../constants/constants";

export const toggleTag = (tagName) => ({
    type: TAG_TOGGLE,
    payload: {tagName}
});

export const clearTags = () => ({
    type: TAG_CLEAR,
    payload: {}
});

export const searchByText = (event) => ({
   type: SEARCH_TEXT,
   payload: {searchTerm: event.target.search.value}
});