import React, {Component} from 'react';
import {MainContentItem} from "./MainContentItem";
import {connect} from "react-redux";
import {fetchItems} from "../actions/fetchActions";
import {loadMoreItems} from "../actions/contentActions";

class ConnectedMainContentItemList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        if (this.props.items && this.props.tags) {
            const itemsToDisplay = this.props.filteredItems ? this.props.filteredItems : this.props.items;// ? this.props.filteredItems : this.props.filterItems(this.props.items, this.props.tags);
            return (
                <div className="main-content-items">
                    {itemsToDisplay.map((item, i) => {
                        if (i < this.props.maxItems) {
                            return <MainContentItem key={i} item={itemsToDisplay[i]}/>
                        }
                    })}
                </div>
            );
        }
        if (this.props.error) {
            return 'Error: ' + this.props.error.message;
        }
        return "Loading..."
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        tags: state.tags,
        error: state.error,
        maxItems: state.maxItems,
        filterChanged: state.filterChanged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMoreClick: () => dispatch(loadMoreItems()),
        fetchItems: () => dispatch(fetchItems())
    };
};

export const MainContentItemList = connect(
    mapStateToProps, mapDispatchToProps
)(ConnectedMainContentItemList);
