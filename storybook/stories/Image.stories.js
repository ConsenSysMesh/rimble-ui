import React from 'react';
import { Image } from 'rimble-ui'

export default {
  title: 'Image'
}

export const image = () => (
  <Image
    src="https://source.unsplash.com/random/1024x768?q=20"
    alt="random unsplash image"
    borderRadius={8}
  />
)
