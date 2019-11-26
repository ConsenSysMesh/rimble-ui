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
          <Card width={'420px'} maxWidth={'100%'} p={0}>
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
              <Heading fontSize={3} mb={3} mr={4}>
                Confirm {'{'}Action Name{'}'}
              </Heading>
              <Text>
                Are you sure you want to {'{'}Action Name{'}'}?
              </Text>
            </Box>
            <Flex
              flexDirection={['column', 'row-reverse']}
              justifyContent={'flex-start'}
              px={4}
              py={3}
              borderTop={1}
              borderColor={'blacks.3'}
            >
              <Button ml={[0, 3]} mb={[2, 0]}>Confirm</Button>
              <Button.Outline >Cancel</Button.Outline>
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
