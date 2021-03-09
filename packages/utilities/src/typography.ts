import {getThemeValue } from "./getThemeValue"

export const fontWeight = (styledProps: any) => {
    // Get variants from theme if exist
    return getThemeValue('fontWeight', styledProps)
};