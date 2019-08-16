import React, { useState, useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';

const Clipboard = props => {
  const [isCopied, setIsCopied] = useState(false);
  const targetEl = useRef(null);

  const copy = () => {
    setIsCopied(true);

    const timer = setTimeout(() => setIsCopied(false), 1000);
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(targetEl.current, {
      // target: () => (),
      text: () => props.text,
    });

    clipboard.on('success', e => {
      console.log('text copied!:', props.text);
      copy();
    });

    clipboard.on('error', e => {
      console.log('error: failed to copy text');
    });

    return () => {
      clipboard.destroy();
      // clearTimeout(timer)
    };
  });

  // return {
  //   isCopied,
  //   copy
  // }

  return (
    <div ref={targetEl}>
      {props.children(isCopied)}
      {/* {isCopied ? 'copied' : props.children} */}
    </div>
  );
};

// const Clipboard = () => {
//   return()
// }

export default Clipboard;
