import React from 'react';
import { Avatar } from 'rimble-ui'

export default {
  title: 'Avatar'
}

export const avatar = () => <Avatar />

export const withImage = () => <Avatar src={'https://source.unsplash.com/128x128/?people,face,portrait'} />

export const withSizes = () =>
  <>
    <Avatar size={'small'} src={'https://source.unsplash.com/128x128/?people,face,portrait'} />
    <Avatar size={'medium'} src={'https://source.unsplash.com/128x128/?people,face,portrait'} />
    <Avatar size={'large'} src={'https://source.unsplash.com/128x128/?people,face,portrait'} />
  </>
