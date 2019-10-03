import React, { Component } from 'react';
import {
  Modal,
  Flex,
  Box,
  Card,
  Button,
  Text,
  Heading
} from 'rimble-ui'

export default {
  title: 'Modal'
}

class MyCustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  closeModal = e => {
    e.preventDefault();
    this.setState((state, props) => ({
      isOpen: false,
    }));
  };

  openModal = e => {
    e.preventDefault();
    this.setState((state, props) => ({
      isOpen: true,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal isOpen={this.state.isOpen}>
          <Card width={'420px'} p={0}>
            <Button.Text
              icononly
              icon={'Close'}
              mainColor={'moon-gray'}
              position={'absolute'}
              top={0}
              right={0}
              mt={3}
              mr={3}
              onClick={this.closeModal}
            />
            <Box p={4} mb={3}>
              <Heading.h3>
                Confirm {'{'}Action Name{'}'}
              </Heading.h3>
              <Text>
                Are you sure you want to {'{'}Action Name{'}'}?
              </Text>
            </Box>
            <Flex
              px={4}
              py={3}
              borderTop={1}
              borderColor={'#E8E8E8'}
              justifyContent={'flex-end'}
            >
              <Button.Outline>Cancel</Button.Outline>
              <Button ml={3}>Confirm</Button>
            </Flex>
          </Card>
        </Modal>
      </React.Fragment>
    );
  }
}

export const modal = () => (
  <MyCustomModal />
)
