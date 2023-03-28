import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {TextProps} from './text-highlight-props';
import _ from 'lodash';
import {compareTwoStrings, getValidRegExpText} from '../utils/index';

export function TextHighlight(props: TextProps) {
  // grab the props
  const {
    text,
    children,
    style: styleOverride = {},
    isSearchable = false,
    highlightedColor = 'yellow',
    searchText = '',
    ...rest
  } = props;

  const defaultText = (
    <ReactNativeText {...rest} style={styleOverride}>
      {children || text}
    </ReactNativeText>
  );

  const highLightWord = (word: any, highlight: string) => {
    // split search text
    let searchArr = highlight?.trim()?.split(' ') || [];
    // remove duplicate words
    searchArr = _.uniq(searchArr);
    // sort array by length
    searchArr = _.sortBy(searchArr, obj => -obj.length);
    let words = word?.trim()?.split(' ') || [];
    let searchArrResults: any = [];
    _.forEach(words, wordText => {
      let matchedTexts: string[] = [];
      for (const search of searchArr) {
        let reExpText = getValidRegExpText(search);
        if (search?.length && reExpText) {
          matchedTexts = _.words(wordText, reExpText);
          if (matchedTexts?.length) {
            let unMatchedChar = wordText.split(reExpText);
            _.forEach(unMatchedChar, (char: any, index: number) => {
              searchArrResults.push({
                text: char,
                isMatched: false,
                isSpace: index === 0,
              });
              if (unMatchedChar.length - 1 !== index) {
                // get matched text from isMatched array
                const matchedText = _.get(matchedTexts, index, '');
                searchArrResults.push({
                  text: matchedText,
                  isMatched: compareTwoStrings(search, matchedText), // compare two string and return true if matched
                  isSpace: false,
                });
              }
            });
            break;
          }
        } else {
          break;
        }
      }
      if (!matchedTexts?.length) {
        searchArrResults.push({
          text: wordText,
          isMatched: Boolean(matchedTexts?.length),
          isSpace: true,
        });
      }
    });
    return (
      <ReactNativeText {...rest} style={styleOverride}>
        {_.map(searchArrResults, (item: any, index: number) => {
          return (
            <ReactNativeText
              key={index}
              style={item.isMatched ? {backgroundColor: highlightedColor} : {}}>
              {_.get(item, 'isSpace', false) && index !== 0 ? ' ' : ''}
              {_.get(item, 'text', '')}
            </ReactNativeText>
          );
        })}
      </ReactNativeText>
    );
  };

  return _.isEmpty(searchText) || !isSearchable
    ? defaultText
    : highLightWord(text, searchText);
}
