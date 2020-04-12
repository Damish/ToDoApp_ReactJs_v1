import React from 'react';

/*
* Author: Damish Samarajeewa
* Registration No: IT18189704
* Email:damishs88@gmail.com
*
* */
const TableBody = (props) => {

    return (

        <tbody>
        {
            props.bodyValue.map((value, index) => {

                return (
                    <tr className={props.completedElementStyle} key={index}>

                        {
                            (props.isCompleted) ? (

                                <td className={"text-center"}>

                                    <p className="text-break mt-2">
                                        <del> {value.itemName} </del>
                                    </p>

                                </td>

                            ) : (
                                <td className={"text-center"}>


                                    <p className="text-break mt-2">{value.itemName}</p>

                                </td>
                            )

                        }

                        {

                            (props.isAction) ? (
                                <td>
                                    {
                                        (props.isCompleted) ? (

                                            <button
                                                type="button"
                                                className="btn btn-outline-warning mt-2 mr-2 ml-2 mb-2 "
                                                onClick={(event) => props.onUnCompleteFn({id: index})}
                                            >

                                                Uncomplete

                                            </button>


                                        ) : (


                                            <button
                                                type="button"
                                                className="btn btn-outline-success mt-2 mr-2 ml-2 mb-2 "
                                                onClick={(event) => props.onCompleteFn({id: index})}

                                            >

                                               <span className="spinner-grow spinner-grow-sm" role="status"
                                                     aria-hidden="true"> </span>
                                                Complete

                                            </button>
                                        )

                                    }


                                    {
                                        (props.isCompleted) ? (null) : (
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary mt-2 mr-2 ml-2 mb-2"
                                                onClick={(event) => props.onEditFn({id: index})}
                                                {...props.editBtnOtherProps}
                                            >
                                                Edit
                                            </button>

                                        )

                                    }

                                    {
                                        (props.isCompleted) ? (null) : (

                                            <button
                                                type="button"
                                                className="btn btn-outline-danger mt-2 mr-2 ml-2 mb-2"
                                                onClick={(event) => props.onDeleteFn({id: index})}
                                            >
                                                Delete
                                            </button>

                                        )

                                    }

                                </td>
                            ) : null

                        }
                    </tr>
                )


            })//end of bodyValues map
        }

        </tbody>
    )
};

export default TableBody;