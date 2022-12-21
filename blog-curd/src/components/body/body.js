import React from 'react';
class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.triggerUpdate = this.triggerUpdate.bind(this);
    }

    componentDidMount() {
        this.getBlogList();
    }

    getBlogList() {
        fetch("http://localhost:3001/blog")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    triggerDelete(id, key) {
        var result = window.confirm("Are you sure to delete?");
        if (result) {
            fetch('http://localhost:3001/blog/' + id, { method: 'DELETE' })
                .then(() => {
                    this.state.items.splice(key, 1)
                    this.setState({
                        items: this.state.items
                    });
                    const element = document.getElementById('alertMsg');
                    element.classList.add("show");
                    element.innerText = 'Deleted Successfully.';
                });
        }
    }

    triggerUpdate(id, key) {
        let responseData = this.state.items[key];
        this.props.sendDataToParent({
            header: 'UPDATE BLOG LIST',
            key: key,
            id: responseData._id,
            title: responseData.title,
            description: responseData.blog_description
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const id = data.get('id');
        var thisPost = id == null || id === "";

        fetch('http://localhost:3001/blog/' + id, {
            method: thisPost ? 'POST' : 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": {
                    "type": "blog",
                    "attributes": {
                        "title": data.get('title'),
                        "blog_description": data.get('description')
                    }
                }
            })
        })
            .then(
                async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const jsonResponse = isJson && await response.json();

                    if (!response.ok) {
                        const error = (jsonResponse && jsonResponse.message) || response.status;
                        return Promise.reject(error);
                    }

                    const element = document.getElementById('alertMsg');
                    element.classList.add("show");
                    if (thisPost) {
                        element.innerText = 'New Record has been Inserted.';
                        this.setState({
                            items: [
                                {
                                    _id: jsonResponse.data.id,
                                    title: data.get('title'),
                                    blog_description: data.get('description')
                                },
                                ...this.state.items
                            ]
                        });
                    } else {
                        //Get all the items
                        let items = [...this.state.items];

                        //Get and update given key data only
                        let item = { ...items[data.get('key')] };
                        item.title = data.get('title');
                        item.blog_description = data.get('description');
                        items[data.get('key')] = item;

                        //Reassign into state
                        this.setState({ items });
                        element.innerText = 'Updated Successfully';
                    }
                    document.getElementById('closeButton').click();
                })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }


    render() {
        let popup = this.props.popup;

        if (!this.state.items) {
            return <div />
        }

        return (
            <>
                <div className="container-fluid mt-3 text-center">
                    <div id="alertMsg" class="alert alert-warning alert-dismissible fade hide" role="alert">
                        New Record has been inserted or updated.
                    </div>
                    {this.state.items.map((blog, key) => {
                        return (
                            <>
                                <div className="row" id={'rid-' + blog._id}>
                                    <div className="col-sm-12 p-3 text-dark float-justify">
                                        <u className="text-center"><strong>{blog.title}</strong></u>
                                        <p>{blog.blog_description}</p>
                                        <button type="button" className="btn btn-danger me-3" onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            this.triggerDelete(blog._id, key);
                                        }}>DELETE BLOG</button>
                                        <button type="button" className="btn btn-primary" onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            this.triggerUpdate(blog._id, key);
                                        }} data-bs-toggle="modal" data-bs-target="#myModal">UPDATE BLOG</button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{popup.header}</h4>
                                <button type="button" className="btn-close" id="closeButton" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container mt-3">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="title">Blog Title:</label>
                                            <input type="text" key={popup.title} defaultValue={popup.title} className="form-control" id="title" placeholder="Enter Blog Title" name="title" autoComplete="off" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description">Blog Description:</label>
                                            <input type="text" key={popup.description} defaultValue={popup.description} className="form-control" id="description" placeholder="Enter Blog Description" name="description" autoComplete="off" required />
                                        </div>
                                        <div className="d-grid">
                                            <input type="hidden" defaultValue={popup.key} className="form-control" id="key" name="key" />
                                            <input type="hidden" defaultValue={popup.id} className="form-control" id="id" name="id" />
                                            <button type="submit" className="btn btn-dark btn-block">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Body;
