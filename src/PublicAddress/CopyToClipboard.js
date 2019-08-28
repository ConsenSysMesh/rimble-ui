import React, { useState, useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';

const Clipboard = props => {
  const [isCopied, setIsCopied] = useState(false);
  const targetEl = useRef(null);

  useEffect(() => {
    let timer;

    const clipboard = new ClipboardJS(targetEl.current, {
      // target: () => (),
      text: () => props.text,
    });

    clipboard.on('success', e => {
      // console.log('text copied!:', props.text);
      setIsCopied(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsCopied(false), 1500);
    });

    clipboard.on('error', e => {
      console.log('error: failed to copy text');
    });

    return () => {
      clipboard.destroy();
      clearTimeout(timer);
    };
  });

  return <div ref={targetEl}>{props.children(isCopied)}</div>;
};

export default Clipboard;
