# React Native Text Highlight

React Native component used to highlight character within a word. This is a port of [react-native-text-highlight](repo link).

Check out a [example](example repo link).

## Installation

Using [npm](https://www.npmjs.com/package/react-native-text-highlight):

```
npm i --save react-native-text-highlight
```

## Usage

To use it, just provide it a search text and searchable word with if searchable true or false.

```jsx
import {TextHightlight} from 'react-native-text-highlight';

<TextHightlight
  text={`Anand Rakesh`}
  isSearchable={true}
  highlightedColor={'yellow'}
  searchText={'Ra An'}
/>;
```

And the `Highlighter` component will highlight all occurrences of search terms within the text:

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://cloud.githubusercontent.com/assets/29597/11914033/e3c319f6-a629-11e5-896d-1a5ce22c9ea2.png">

## Props

| Property         | Type    | Required? | Description                                                                                                 |
| :--------------- | :------ | :-------: | :---------------------------------------------------------------------------------------------------------- |
| text             | String  |     ✓     | The text which is need to display                                                                           |
| style            | Object  |           | Styles applied to text                                                                                      |
| isSearchable     | Boolean |           | if you want to search(hightlight) character in word pass as true value or else false default value is false |
| highlightedColor | String  |           | Apply any color you want to show in highlighted text Default value is yellow wrapper                        |
| searchText       | String  |           | Searchable text value.                                                                                      |
