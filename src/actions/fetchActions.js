import {FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE} from '../constants/constants';
import {FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE} from '../constants/constants';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchTags = () => {
    return dispatch => {
        return fetch('/json/tags.json')
            .then(response => handleErrors(response))
            .then(response => response.json())
            .then(json => {
                dispatch(fetchTagsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchTagsFailure(error)));
    };
};

export function fetchItems() {
    console.log('fetch');
    return dispatch => {
        return fetch("/json/items.json")
            .then(response => handleErrors(response))
            .then(response => response.json())
            .then(json => {
                console.log('fetch');
                dispatch(fetchItemsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchItemsFailure(error)));
    };
}

export const fetchTagsSuccess = tags => ({
    type: FETCH_TAGS_SUCCESS,
    payload: { tags }
});

export const fetchTagsFailure = error => ({
    type: FETCH_TAGS_FAILURE,
    payload: { error }
});

export const fetchItemsSuccess = items => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: { items }
});

export const fetchItemsFailure = error => ({
    type: FETCH_ITEMS_FAILURE,
    payload: { error }
});