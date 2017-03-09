# react-scroll-loader
Simple, efficient infinite scroll component for React

## Demo
<a href="https://unsplash.now.sh">unsplash.now.sh</a>

## Install
`npm install react-scroll-loader --save`

## Props

Prop                       |    Description
---------------------------|----------------
`atEnd`                      | Set to true if there's no more content to load
`loadingIcon`         | Image url to override the default loading animation
`requestHandler`                 | Function to call when we've scrolled to the bottom of the page

## Example
```js
<Infinite requestHandler={this.getNextPage} atEnd={atEnd} />  
```
