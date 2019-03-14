import React, { Component } from 'react';
import BillCard from "./BillCard";

class BillsList extends Component {
    render() {
        const bills = [{id: 1}, {id: 2}, {id: 3}];

        return (
            <div>
                <h3>March 2019</h3>

                {bills.map(() => <BillCard />)}
            </div>
        );
    }

}

export default BillsList;
