import React, {Component} from 'react';
import Modal from "./modal/Modal";

/*
* Author: Damish Samarajeewa
* Registration No: IT18189704
* Email:damishs88@gmail.com
*
* */
class EditComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                itemName: ""
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.editData !== this.props.editData) {
            this.setState({
                formData: this.props.editData
            })
        }
    }

    onChangeFn = (event) => {

        this.setState({
            formData: {

                ...this.state.formData,
                [event.target.name]: event.target.value,


            }
        })

    };

    setUpdatedData = () => {

        this.props.setUpdatedData(this.state.formData)

    }


    render() {
        return (

            <Modal

                modalId={"editComponent"}
                modalTitle={"Edit item"}
                onSaveFn={this.setUpdatedData}

            >
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Add Item</label>


                        <input
                            type="text"
                            className="form-control"
                            name={"itemName"}
                            value={this.state.formData.itemName}
                            onChange={(event) => this.onChangeFn(event)}/>
                    </div>

                </form>
            </Modal>
        );
    }
}

export default EditComponent;