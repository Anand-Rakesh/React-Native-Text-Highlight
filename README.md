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

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://raw.githubusercontent.com/Anand-Rakesh/React-Native-Text-Highlight/main/Images/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-03-27%20at%2019.19.05.png">
<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://raw.githubusercontent.com/Anand-Rakesh/React-Native-Text-Highlight/main/Images/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-03-27%20at%2019.19.13.png">
<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://raw.githubusercontent.com/Anand-Rakesh/React-Native-Text-Highlight/main/Images/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-03-27%20at%2019.19.17.png">
<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://raw.githubusercontent.com/Anand-Rakesh/React-Native-Text-Highlight/main/Images/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-03-27%20at%2019.19.23.png">

## Props

| Property         | Type    | Required? | Description                                                                                                 |
| :--------------- | :------ | :-------: | :---------------------------------------------------------------------------------------------------------- |
| text             | String  |     ✓     | The text which is need to display                                                                           |
| style            | Object  |           | Styles applied to text                                                                                      |
| isSearchable     | Boolean |           | if you want to search(hightlight) character in word pass as true value or else false default value is false |
| highlightedColor | String  |           | Apply any color you want to show in highlighted text Default value is yellow wrapper                        |
| searchText       | String  |           | Searchable text value.                                                                                      |

## License
MIT License - fork, modify and use however you want.