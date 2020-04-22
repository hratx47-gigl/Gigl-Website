import React from "react";
import axios from "axios";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };

    this.handleImageSelection = this.handleImageSelection.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const form = new FormData();
    form.append("gigImage", this.state.file);

    const gigImageRoute = "/gigImageUpload";

    const imagePostConfig = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    this.postImage(gigImageRoute, form, imagePostConfig);
  }

  postImage(route, data, config) {
    axios
      .post(route, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleImageSelection(event) {
    this.setState({
      file: event.target.files[0],
    });
  }

  render() {
    return (
      <form>
        <input
          type="file"
          name="gigImage"
          onChange={this.handleImageSelection}
        />
      </form>
    );
  }
}

export default ImageUpload;
