import {getThemeValue } from "./getThemeValue"

export const color = (styledProps: any) => {
    // Get variants from theme if exist
    return getThemeValue('color', styledProps)
};