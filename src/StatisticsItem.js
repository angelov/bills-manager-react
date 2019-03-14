import React, { Component } from 'react';

class StatisticsItem extends Component {
    render() {
        const { title, value } = this.props;

        return (
            <div className="text-center">
                <small style={{textTransform: "uppercase"}}>{title}</small>
                <h2>{value}</h2>
            </div>
        );
    }

}

export default StatisticsItem;