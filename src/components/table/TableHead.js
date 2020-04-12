import React, {Component} from 'react';

/*
* Author: Damish Samarajeewa
* Registration No: IT18189704
* Email:damishs88@gmail.com
*
* */
class TableHead extends Component {

    static defaultProps = {
        headerValue: [],
        isAction: false
    }

    render() {
        return (
            <thead className={"thead-dark text-center"}>

            <tr>
                {
                    this.props.headerValue.map((value, index) => {

                        return (
                            <th key={index} scope="col">{value}</th>
                        )
                    })
                }

            </tr>

            </thead>
        );
    }
};

export default TableHead;