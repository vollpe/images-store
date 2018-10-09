import React, {Component} from 'react';

class MainContentItem extends Component {

    render() {
        const imageStyle = {
            backgroundImage: 'url(' + this.props.item.image + ')'
        };
        return (
            <div className="main-content-item">
                <div className="item-image" style={imageStyle}/>
                <div className="item-title">
                    <p>{this.props.item.title}</p>
                </div>
            </div>
        );
    }
}

export {MainContentItem};
