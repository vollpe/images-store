import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchTags} from "../actions/fetchActions";
import {toggleTag} from "../actions/tagsActions";

class ConnectedMainContentHeaderTagList extends Component {

    componentDidMount() {
        this.props.fetchTags();
    }

    render() {
        if (this.props.tags) {
            return (
                <div className="main-content-tag-list">
                    {this.props.tags.map((tag, key) => {
                        const tagClassName = "tag-button " + (tag.active ? "tag-button-active" : "");
                        return <button className={tagClassName} key={key} onClick={() => this.props.onTagClick(tag.name)}>
                            {tag.name}
                        </button>
                    })}
                </div>
            );
        } else {
            return "Loading..."
        }
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags,
        filterChanged: state.filterChanged,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTagClick: (tagName) => dispatch(toggleTag(tagName)),
        fetchTags: () => dispatch(fetchTags())
    }
};

export const MainContentHeaderTagList = connect(
    mapStateToProps, mapDispatchToProps
)(ConnectedMainContentHeaderTagList);
