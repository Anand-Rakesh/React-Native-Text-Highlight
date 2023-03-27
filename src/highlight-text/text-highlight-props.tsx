import {TextStyle, TextProps as TextProperties} from 'react-native';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * The text which is need to display.
   */
  text: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[];
  /**
   * to check text is highlighted or not while user search anything
   */
  isSearchable?: boolean;
  /**
   * hightlighted text color value
   */
  highlightedColor?: string;
  /**
   * search text value
   */
  searchText?: string;
}
