# ToastMessage.provider documentation

**mount `<ToastMessage.Provider />`**

```jsx
<ToastMessage.Provider ref={node => (window.toastProvider = node)} />
```

<!-- STORY -->

### Provider API

`ToastMessage.Provider` will pass any props that are defined on its component and uses the following:

| Name                  | Type   | Parameters              | Description                                                                   |
| --------------------- | ------ | ----------------------- | ----------------------------------------------------------------------------- |
| addMessage.processing | method | message, message object | Creates and shows a new processing toast message with provided message object |
| addMessage.success    | method | message, message object | Creates and shows a new success toast message with provided message object    |
| addMessage.failure    | method | message, message object | Creates and shows a new failure toast message with provided message object    |
| addMessage.default    | method | message, message object | Creates and shows a new default toast message with provided message object    |
| removeMessage         | method | none                    | Removes a visible toast message                                               |

## Message Object

| Name             | Type   | Values                                                           | Description                                |
| ---------------- | ------ | ---------------------------------------------------------------- | ------------------------------------------ |
| primaryMessage   | string |                                                                  | Sets the main text in the toast message    |
| secondaryMessage | string |                                                                  | Sets the text below the main text          |
| actionHref       | string |                                                                  | Sets the URL for the toast message action  |
| actionText       | string |                                                                  | Sets the text for the toast message action |
| variant          | string | default, processing, success, failure                            | Sets the icon and color                    |
| icon             | string | [icon list](https://github.com/jxnblk/rmdi/blob/master/ICONS.md) | Adds Icon to toast message                 |
| colorTheme       | string | dark, default                                                    | Sets the color palette                     |

Note: The first parameter of the addMessage method is the same as the primaryMessage in the message object. If both are provided, the primaryMessage property of the message object will take priority.
