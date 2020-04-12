import React, {Component} from 'react';

import _findIndex from "lodash.findindex";
import Table from "./components/table/Table";
import EditComponent from "./components/EditComponent";


/*
* Author: Damish Samarajeewa
* Registration No: IT18189704
* Email:damishs88@gmail.com
*
* */
class App extends Component {

    constructor() {
        super();

        this.state = {
            formData: [],
            currentData: {},
            editComponentData: {},
            currentCompleted: {},
            currentUnCompleted: {},
            currentFirst: {},
            completedItems: []

        };
    };

    onChangeFn = (event) => {

        this.setState({
            currentData: {
                ...this.state.currentData,
                [event.target.name]: event.target.value,

            }
        }, () => {
            console.log(this.state.currentData);
        })

    };

    onClickFn = () => {


        this.setState({
            formData: [

                ...[this.state.currentData], ...this.state.formData
            ]
        }, () => {

            console.log(this.state.formData);

        })

    };

    onDeleteFn = (id) => {
        let temp = this.state.formData;
        let record = id;

        console.log("++++++delete index+++++++", record)

        temp.splice(record, 1);
        this.setState({
            formData: temp
        })
    };

    onUnCompleteFn = (id) => {
        let temp = this.state.completedItems;
        let record = id;

        console.log("++++++Un complete item index+++++++", record)

        this.setState({
            currentUnCompleted: this.state.completedItems[id]
        }, () => {

            temp.splice(record, 1);

            this.setState({
                completedItems: temp,
            }, () => {

                let tempFormData = this.state.formData;
                tempFormData.splice(0, 0, this.state.currentUnCompleted);

                this.setState({
                    formData: tempFormData
                })

            })

        })

    };

    onEditFn = (id) => {
        let temp = this.state.formData;
        let record = id;
        console.log("++++++update index+++++++", record)
        this.setState({

            editComponentData: temp[record]

        })
    };

    setUpdatedData = (data) => {

        let temp = this.state.formData;
        let record = _findIndex(temp, {itemName: this.state.editComponentData.itemName});

        console.log("++++++updating data id+++++++", record)

        temp.splice(record, 1, data)
        this.setState({

            formData: temp

        })
        console.log("++++++updated data+++++++", data)
        console.log("++++++updated list+++++++", this.state.formData)

    };

    onCompleteFn = (id) => {
        let temp = [...this.state.formData]
        console.log("Array Before deleting first and completed", this.state.formData)

        this.setState({
            ...this.state.currentData,
            //shifting of items
            currentCompleted: temp[id],
            currentFirst: temp[0]
        }, () => {
            temp.splice(id, 1)//delete element in given id

            this.setState({
                    temp: [...temp]
                },
                () => {
                    this.setState({
                        formData: temp,
                        //add completed items to a list
                        completedItems: [
                            ...this.state.completedItems,
                            ...[this.state.currentCompleted]
                        ]
                    }, () => {
                        console.log("Original Array After Sorting", this.state.formData)
                        console.log("Completed indexes Array", this.state.completedItems)
                    })
                })
        })
        //     })
        // })

    };

    render() {

        // const headers = ["Item name"];

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className={"text-center mt-5"}>
                            <h1>To do App</h1>
                            <hr/>
                        </div>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className={"text-center"}>
                            <h5>A simple To do application developed using React</h5>
                            <br/>
                            <h6>Author : Damish Samarajeewa (IT18189704)</h6>
                            <h6>Sri Lanka Institute of Information Technology</h6>
                            <hr/>
                        </div>
                    </div>
                </div>


                <div className={"row "}>

                    <div className="col-sm-5">

                        <div className="card card-body my-3">

                            <form>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-primary text white">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={"itemName"}
                                        placeholder="Add a Todo item"
                                        onChange={(event) => this.onChangeFn(event)}
                                    />

                                </div>

                                <button
                                    type="button"
                                    className="btn btn-block btn-primary mt-3"
                                    onClick={() => this.onClickFn()}
                                >
                                    Add Item
                                </button>

                            </form>

                        </div>


                    </div>

                    <div className="col">

                        <h4> Items List </h4>

                        <Table
                            // headers={headers}
                            body={this.state.formData}
                            completed={this.state.completedItems}
                            elementStyle={"mt-3"}
                            isAction={true}
                            onCompleteFn={(event) => this.onCompleteFn(event.id)}
                            onEditFn={(event) => this.onEditFn(event.id)}
                            onDeleteFn={(event) => this.onDeleteFn(event.id)}
                            onDeleteCompletedItemFn={(event) => this.onDeleteCompletedItemFn(event.id)}
                            onUnCompleteFn={(event) => this.onUnCompleteFn(event.id)}
                            editBtnOtherProps={{
                                "data-toggle": "modal",
                                "data-target": "#editComponent"
                            }}
                        />

                        <hr/>


                    </div>

                    <EditComponent

                        editData={this.state.editComponentData}
                        setUpdatedData={(data) => this.setUpdatedData(data)}
                    />


                </div>
            </div>

        )
    }
}

export default App;
