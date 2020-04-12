import React, {Component} from "react";
// import TableHead from "./TableHead";
import TableBody from "./TableBody";

/*
* Author: Damish Samarajeewa
* Registration No: IT18189704
* Email:damishs88@gmail.com
*
* */

class Table extends Component {

    static defaultProps = {
        elementStyle: "mb-0",
        headerValue: [],
        bodyValue: [],
        isAction: false,
        isCompleted: false,
        onDeleteFn: undefined,
        onDeleteCompletedItemFn: undefined,
        onEditFn: undefined,
        onCompleteFn: undefined,
        editBtnOtherProps: {}
    };


    render() {
        return (

            <table className={`table table-bordered  ${this.props.elementStyle} `}>

                {/*<TableHead headerValue ={this.props.headers} isAction ={this.props.isAction} />*/}

                <TableBody
                    completedElementStyle={"table-active"}
                    bodyValue={this.props.body}
                    completedItems={this.props.completed}
                    isAction={this.props.isAction}
                    isCompleted={false}
                    onEditFn={this.props.onEditFn}
                    onCompleteFn={this.props.onCompleteFn}
                    onDeleteFn={this.props.onDeleteFn}
                    onDeleteCompletedItemFn={this.props.onDeleteCompletedItemFn}
                    onUnCompleteFn={this.props.onUnCompleteFn}
                    editBtnOtherProps={this.props.editBtnOtherProps}
                />

                <TableBody
                    completedElementStyle={"table-success"}
                    bodyValue={this.props.completed}
                    completedItems={this.props.completed}
                    isAction={this.props.isAction}
                    isCompleted={true}
                    onEditFn={this.props.onEditFn}
                    onCompleteFn={this.props.onCompleteFn}
                    onDeleteFn={this.props.onDeleteFn}
                    onDeleteCompletedItemFn={this.props.onDeleteCompletedItemFn}
                    onUnCompleteFn={this.props.onUnCompleteFn}
                    editBtnOtherProps={this.props.editBtnOtherProps}
                />

            </table>

        );
    }
}

export default Table;