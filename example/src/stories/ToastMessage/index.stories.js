import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "storybook-readme";

import MyREADME from "./README.md";

import { Flex, Box, ToastMessage, Button } from "rimble-ui";

storiesOf("ToastMessage", module)
  .addDecorator(withDocs(MyREADME))
  .add("ToastMessage", () => (
    <div>
      <Flex>
        <Box width={"50%"} mr={4}>
          <ToastMessage my={3} />

          <ToastMessage secondaryMessage={"Lorem ipsum dolor sit."} my={3} />
          <ToastMessage
            icon={"InfoOutline"}
            my={3}
            actionText={"Action"}
            actionHref={"#!"}
          />
          <ToastMessage
            secondaryMessage={"Lorem ipsum dolor sit."}
            icon={"InfoOutline"}
            my={3}
            actionText={"Action"}
            actionHref={"#!"}
          />
          <ToastMessage.Processing
            my={3}
            message={"Processing {0.00018} ETH payment"}
          />
          <ToastMessage.Success
            my={3}
            message={"ETH sent"}
            secondaryMessage={"You have {1.03} ETH remaining"}
            actionText={"Action"}
            actionHref={"#!"}
          />
          <ToastMessage.Failure
            my={3}
            message={"Payment failed"}
            secondaryMessage={"Make sure you have enough ETH and try again"}
          />
        </Box>
        <Box width={"50%"}>
          <ToastMessage colorTheme={"dark"} my={3} />
          <ToastMessage
            secondaryMessage={"Lorem ipsum dolor sit."}
            colorTheme={"dark"}
            my={3}
          />
          <ToastMessage
            icon={"InfoOutline"}
            colorTheme={"dark"}
            my={3}
            actionText={"Action"}
            actionHref={"#!"}
          />
          <ToastMessage
            secondaryMessage={"Lorem ipsum dolor sit."}
            icon={"InfoOutline"}
            colorTheme={"dark"}
            my={3}
            actionText={"Action"}
            actionHref={"#!"}
          />
        </Box>
      </Flex>

      <Button
        mb={3}
        onClick={e =>
          window.toastProvider.addMessage("[Processing… ]", {
            secondaryMessage: Date.now(),
            actionHref: "#!",
            actionText: "Action",
            variant: "processing"
          })
        }
      >
        "addMessage.processing"
      </Button>
      <br />
      <Button
        mb={3}
        onClick={e =>
          window.toastProvider.addMessage("[Complete… ]", {
            secondaryMessage: Date.now(),
            actionHref: "#!",
            actionText: "Action",
            variant: "success"
          })
        }
      >
        "addMessage.success"
      </Button>
      <br />
      <Button
        mb={3}
        onClick={e =>
          window.toastProvider.addMessage("[Failed… ]", {
            secondaryMessage: Date.now(),
            actionHref: "#1",
            actionText: "Action",
            variant: "failure"
          })
        }
      >
        "addMessage.failure"
      </Button>
      <br />
      <Button
        mb={3}
        onClick={e => window.toastProvider.addMessage("[Your message here… ]")}
      >
        "addMessage.default"
      </Button>
      <br />
      <Button
        mb={3}
        onClick={e =>
          window.toastProvider.addMessage("[Your message here… ]", {
            icon: "Info"
          })
        }
      >
        "addMessage.default with Icon"
      </Button>
      <br />
      <Button
        mb={3}
        onClick={e =>
          window.toastProvider.addMessage("[Your message here… ]", {
            icon: "VpnKey",
            colorTheme: "dark"
          })
        }
      >
        "addMessage.default dark colors with Icon"
      </Button>
      <br />
      <Button onClick={() => window.toastProvider.removeMessage()}>
        "removeMessage"
      </Button>

      <ToastMessage.Provider ref={node => (window.toastProvider = node)} />
    </div>
  ));
