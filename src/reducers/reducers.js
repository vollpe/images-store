import {FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE, TAG_CLEAR, SEARCH_TEXT} from "../constants/constants";
import {FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE} from "../constants/constants";
import {TAG_TOGGLE, LOAD_MORE_ITEMS} from "../constants/constants";

const initialState = {
    maxItems: 12
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TAGS_SUCCESS:
            return {
                ...state,
                error: null,
                tags: action.payload.tags
            };
        case FETCH_TAGS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                tags: null
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                error: null,
                items: action.payload.items
            };
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                items: null
            };
        case TAG_TOGGLE:
            const tagName = action.payload.tagName;
            let tags = state.tags;
            for (let i in tags) {
                if (tags[i].name === tagName) {
                    tags[i].active = !tags[i].active;
                    break;
                }
            }
            return {
                ...state,
                tags: tags,
                maxItems: 12,
                filterChanged: !state.filterChanged
            };
        case TAG_CLEAR:
            tags = state.tags;
            for (let i in tags) {
                tags[i].active = false;
            }
            return {
                ...state,
                tags: tags,
                maxItems: 12,
                filterChanged: !state.filterChanged
            };
        case SEARCH_TEXT:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                filterChanged: !state.filterChanged
            };
        case LOAD_MORE_ITEMS:
            return {
                ...state,
                maxItems: state.maxItems + 12
            };
        default:
            return state;
    }
}

export default rootReducer;