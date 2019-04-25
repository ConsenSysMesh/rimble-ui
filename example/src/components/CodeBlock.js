import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import PrismJs from 'prismjs/components/prism-javascript';
import PrismMarkup from 'prismjs/components/prism-markup.min';
import { Flex, Box, Text, OutlineButton, Checkbox } from 'rimble-ui';

import './CodeBlock.css';

const jsxStringOptions = {
  showDefaultProps: false,
};

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copySuccess: ''
    };
    this.textArea = React.createRef();
  }

  componentDidMount() {
    Prism.highlightAll();
    let code = '';
    this.props.textOnly
      ? (code = this.props.children)
      : (code = reactElementToJSXString(this.props.children, jsxStringOptions));

    this.setState({ code });
  }

  copyToClipboard = e => {
    this.textArea.current.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  render() {
    return (
      <Box mb={5} minWidth={'100%'}>
        <Box>
          {this.props.textOnly ? null : <Flex>{this.props.children}</Flex> }

          <Box
            position={'relative'}
            mt={3}
          >
            <Text fontSize={1} fontWeight={3} color={'inherit'}>
              Example code:
            </Text>
            <textarea
              ref={this.textArea}
              style={{
                height: '0',
                width: '0',
                opacity: '0',
                position: 'absolute',
                top: '0',
                right: '0',
                zIndex: '0',
              }}
              value={this.state.code}
            />
          </Box>
          <Box
            position={'relative'}
            my={2}
          >
            <OutlineButton
              onClick={this.copyToClipboard}
              style={{ zIndex: '1' }}
              size="small"
              position={'absolute'}
              top={'.5rem'}
              right={'.5rem'}
            >
              { this.state.copySuccess ? this.state.copySuccess : `Copy Code` }
            </OutlineButton>
            <pre
              className={this.props.syntax ? this.props.syntax : 'language-html'}
              style={{
                margin: '0',
                padding: '1rem',
                borderRadius: '4px'
              }}
            >
              <code>
                {this.props.textOnly ? this.props.children : reactElementToJSXString(this.props.children, jsxStringOptions) }
              </code>
            </pre>
          </Box>
        </Box>
      </Box>
    );
  }
}

CodeBlock.propTypes = {
  syntax: PropTypes.string
}

export default CodeBlock;
