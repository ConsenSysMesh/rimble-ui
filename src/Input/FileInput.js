import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledFileInput = styled('input')`
  & {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
  }
`;

const StyledFileLabel = styled('label')`
  & {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
`;

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      buttonLabel: 'Choose file…',
      files: false,
    };
  }

  handleClick = e => {
    this.fileInput.current.click();
  };

  handleChange = e => {
    let files = this.fileInput.current.files;

    this.setState({
      files: files.length ? true : false,
    });

    if (files && files.length > 1) {
      this.setState({
        buttonLabel: files.length + ' files selected',
      });
    } else if (files && files.length) {
      this.setState({
        buttonLabel: files[0].name,
      });
    } else {
      this.setState({
        buttonLabel: 'Choose file…',
      });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { variant, ...props } = this.props;

    if (variant === 'unstyled') {
      return <input type={'file'} {...props} />;
    }

    return (
      <StyledFileLabel>
        <StyledFileInput
          type={'file'}
          {...props}
          ref={this.fileInput}
          onChange={this.handleChange}
        />
        <Button
          icon={this.state.files ? 'CloudDone' : 'CloudUpload'}
          onClick={this.handleClick}
        >
          {this.state.buttonLabel}
        </Button>
      </StyledFileLabel>
    );
  }
}

FileInput.displayName = 'FileInput';

export default FileInput;
