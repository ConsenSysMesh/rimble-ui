import React from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import PrismJs from 'prismjs/components/prism-javascript';
import PrismMarkup from 'prismjs/components/prism-markup.min';
import { Flex, Button, Box, Heading, Checkbox } from 'rimble-ui';

import './CodeBlock.css';

const jsxStringOptions = {
  showDefaultProps: false,
};

class CodeBlock extends React.Component {
  state = { copySuccess: '' };

  componentDidMount() {
    Prism.highlightAll();
    let code = '';
    this.props.textOnly
      ? (code = this.props.children)
      : (code = reactElementToJSXString(this.props.children, jsxStringOptions));

    this.setState({ code });
  }

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  render() {
    return (
      <Box mb={4} minWidth={['100%', '600px', '600px']}>
        <Box>
          {this.props.textOnly ? null : <Flex>{this.props.children}</Flex> }
          
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            position={'relative'}
            mb={'-1em'}
          >
            <Heading.h6>Example code</Heading.h6>
            <Button
              color={'primary'}
              hovercolor={'white'}
              bg={'white'}
              size="small"
              style={{ zIndex: '1' }}
              borderColor={'#ccc'}
              border={1}
              boxShadow={0}
              onClick={this.copyToClipboard}
            >
              {this.state.copySuccess
                ? this.state.copySuccess
                : `Copy Snippet`}
            </Button>
            <textarea
              ref={textarea => (this.textArea = textarea)}
              style={{
                height: '1px',
                width: '1px',
                position: 'absolute',
                top: '50%',
                right: '3px',
                zIndex: '0',
                border: 'none'
              }}
              value={this.state.code}
            />
          </Flex>
          <pre className={this.props.syntax ? this.props.syntax : 'language-html'}>
            <code>
              {this.props.textOnly ? this.props.children : reactElementToJSXString(this.props.children, jsxStringOptions) }
            </code>
          </pre>
        </Box>
      </Box>
    );
  }
}

CodeBlock.propTypes = {
  syntax: PropTypes.string
}

export default CodeBlock;
