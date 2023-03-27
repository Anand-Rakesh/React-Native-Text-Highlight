import _ from 'lodash';

/** compare two strings values and return boolean value
 * @param firstString first string value
 * @param secondString second string value
 */
export function compareTwoStrings(firstString: string, secondString: string) {
  firstString = _.trim(firstString);
  secondString = _.trim(secondString);
  let isEqual = false;
  // check if both strings are not empty
  if (!_.isEmpty(firstString) && !_.isEmpty(secondString)) {
    // check if both strings are equal
    if (_.toLower(firstString) === _.toLower(secondString)) {
      isEqual = true;
    }
  }
  return isEqual;
}

/**
 * get valid regular expression text
 * @param searchText search text
 * @param isFirstTimeCalled to avoid infinite loop if error occurs in first time
 */
export function getValidRegExpText(
  searchText: string,
  isFirstTimeCalled = true, // to avoid infinite loop if error occurs in first time
) {
  let reText: any = '';
  try {
    reText = RegExp(searchText ?? '', 'gi');
  } catch (error) {
    // if error occurs then replace special characters with escape character and call the function again
    if (isFirstTimeCalled && searchText) {
      // replace special characters with escape character
      searchText = searchText.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
      // call the function again with new search text value and set isFirstTimeCalled to false to avoid infinite loop
      reText = getValidRegExpText(searchText, false);
    }
  }
  return reText;
}

/** search dynamic data using multiple Keys method */
export function dynamicSearchWithMultiKeys(
  data: Array<Record<string, any>>,
  keys: string[],
  value: string,
): any[] {
  let searchResult: any[] = data;
  let searchArr = value?.trim()?.toLowerCase()?.split(' ') || [];
  searchArr = _.uniq(searchArr);
  _.forEach(searchArr, (searchTextVal: string) => {
    searchResult = _.filter(searchResult, obj =>
      _.some(keys, key => {
        const str = String(_.get(obj, `${[key]}`, '')).toLowerCase();
        if (str) {
          // verify if search text is included in the string
          const isMatched =
            str.includes(searchTextVal) || searchTextVal.includes(str);
          return isMatched;
        } else {
          return false;
        }
      }),
    );
  });
  return searchResult;
}