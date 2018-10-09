import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {MainContentHeaderTagList} from "./MainContentHeaderTagList";
import {clearTags, searchByText} from "../actions/tagsActions";
import {getItemsLabel} from "../common";

class ConnectedMainContentHeader extends Component {

    getItemsCountLabel() {
        const itemCount = this.props.filteredItems ? this.props.filteredItems.length : 'Not loaded yet';
        return <div className="item-count">{getItemsLabel(itemCount)}</div>
    }

    getClearTagsButton() {
        if (this.props.tags && (this.props.tags.filter(el => el.active).length > 0)) {
            return <button className="clear-tags" onClick={() => this.props.onClearTagsClick()}>
                Clear Tags
            </button>
        }
    }

    render() {
        return (
            <div className="main-content-header">
                <div className="main-content-header-box">
                    <h1 className="main-content-header-title">Items</h1>
                    <form name="search-form" onSubmit={(event) => this.props.onSearch(event)}>
                        <input type="search" name="search" placeholder="Search"/>
                    </form>
                </div>
                <MainContentHeaderTagList/>
                <div className="main-content-items-count-box">
                    {this.getItemsCountLabel()}
                    {this.getClearTagsButton()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags,
        filterChanged: state.filterChanged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (event) => {
            event.preventDefault();
            dispatch(searchByText(event))
        },
        onClearTagsClick: () => dispatch(clearTags())
    }
};

export const MainContentHeader = connect(
    mapStateToProps, mapDispatchToProps
)(ConnectedMainContentHeader);
