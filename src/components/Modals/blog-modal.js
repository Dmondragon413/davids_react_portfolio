import React, { Component } from "react";
import ReactModal from "react-modal";
import BlogForm from "../blog/blog-form"

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        // whenever we're using a tool, a third party tool, like React modal, 
        // the recommended approach is to pass in our custom overrides directly inline 
        // to make sure that none of the defaults override our code. vvv

        this.customStyles = {
            content: {
                top:"50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%,-50%)",
                width: "800px"
            },
            overlay:{
                backgroundColor: "rgba(1, 1, 1, 0.50)"
            }
        }

        this.handleBlogFormSubmission = this.handleBlogFormSubmission.bind(this);
    }

    handleBlogFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog);
    }

    render() {
        return (
            <ReactModal style={this.customStyles} onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>
                <BlogForm handleBlogFormSubmission={this.handleBlogFormSubmission}/>
            </ReactModal>

        )
    }
}