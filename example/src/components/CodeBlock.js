import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import { Flex, OutlineButton, Box, Heading } from 'rimble-ui';
import './CodeBlock.css';

const options = {
  showDefaultProps: false,
};

class CodeBlock extends React.Component {
  state = { copySuccess: '' };

  componentDidMount() {
    Prism.highlightAll();
    let code = '';
    this.props.textOnly
      ? (code = this.props.children)
      : (code = reactElementToJSXString(this.props.children, options));

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
      <Box mb={4}>
        {this.props.textOnly ? (
          <Box>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'relative'}
              mb={'-1em'}
            >
              <Heading.h6>Example code</Heading.h6>
              <OutlineButton size="small" onClick={this.copyToClipboard}>
                {this.state.copySuccess
                  ? this.state.copySuccess
                  : `Copy Snippet`}
              </OutlineButton>
              <textarea
                ref={textarea => (this.textArea = textarea)}
                style={{
                  height: '1px',
                  width: '1px',
                  position: 'absolute',
                  top: '50%',
                  right: '3px',
                  zIndex: '-1',
                }}
                value={this.state.code}
              />
            </Flex>
            <pre className="lang-jsx">
              <code>{this.props.children}</code>
            </pre>
          </Box>
        ) : (
          <Box>
            <Flex>{this.props.children}</Flex>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'relative'}
              mb={'-1em'}
            >
              <Heading.h6>Example code</Heading.h6>
              <OutlineButton size="small" onClick={this.copyToClipboard}>
                {this.state.copySuccess
                  ? this.state.copySuccess
                  : `Copy Snippet`}
              </OutlineButton>
              <textarea
                ref={textarea => (this.textArea = textarea)}
                style={{
                  height: '1px',
                  width: '1px',
                  position: 'absolute',
                  top: '50%',
                  right: '3px',
                  zIndex: '-1',
                }}
                value={this.state.code}
              />
            </Flex>
            <pre className="lang-jsx">
              <code>
                {reactElementToJSXString(this.props.children, options)}
              </code>
            </pre>
          </Box>
        )}
      </Box>
    );
  }
}

export default CodeBlock;
