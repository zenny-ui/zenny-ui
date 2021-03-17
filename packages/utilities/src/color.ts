import {getNestedThemeValue } from "./getThemeValue"
import CSS from 'csstype'

export type ColorProps = {
  color?: CSS.Properties['color'];
}

export const color = (styledProps: any) => {
    return getNestedThemeValue('color', styledProps, '#000')
};