import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {MainContentHeader} from "./MainContentHeader";
import {MainContentItemList} from "./MainContentItemList";
import {loadMoreItems} from "../actions/contentActions";
import {filterItemsByTags} from "../common";

class ConnectedMainContent extends Component {

    getLoadMoreButton(filteredItems) {
        if (filteredItems && (filteredItems.length > this.props.maxItems)) {
            return <button className="main-content-load-more-button capitalize" onClick={() => this.props.onLoadMoreClick()}>
                Load more
            </button>
        }
    }

    render() {
        console.log(this.props.searchTerm);
        let filteredItems = filterItemsByTags(this.props.items, this.props.tags, this.props.searchTerm);
        console.log(filteredItems);
        return (
            <div className="main-content">
                <MainContentHeader filteredItems={filteredItems}/>
                <MainContentItemList filteredItems={filteredItems}/>
                {this.getLoadMoreButton(filteredItems)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        tags: state.tags,
        searchTerm: state.searchTerm,
        maxItems: state.maxItems,
        filterChanged: state.filterChanged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMoreClick: () => dispatch(loadMoreItems())
    };
};

export const MainContent = connect(
    mapStateToProps, mapDispatchToProps
)(ConnectedMainContent);