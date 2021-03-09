import {getSpaceValue } from "./getSpaceValue"

export const padding = (styledProps: any) => {
    // Get variants from theme if exist
    return getSpaceValue('padding', styledProps)
};