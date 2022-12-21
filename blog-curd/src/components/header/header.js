import React from 'react';
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.modelClick = this.modelClick.bind(this)
  }

  modelClick() {
    this.props.sendDataToParent({
        header: 'ADD TO BLOG LIST',
        key: '',
        id: '',
        title: '',
        description: ''
    });

    // document.querySelector(".modal-title").innerText = "ADD TO BLOG LIST";
    // document.getElementById("id").value = '';
    // document.getElementById("title").value = '';
    // document.getElementById("description").value = '';
  }

  render() {
    return (
      <header>
        <div class="container-fluid text-white bg-dark">
          <div class="row">
            <div class="col-sm-10 p-3">
              <h1>WELCOME TO BLOGS</h1>
            </div>
            <div class="col-sm-2 p-4">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={this.modelClick}>ADD NEW BLOG</button>
            </div>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
