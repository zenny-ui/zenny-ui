import {getSpaceValue } from "./getSpaceValue"

export const margin = (styledProps: any) => {
    // Get variants from theme if exist
    return getSpaceValue('margin', styledProps)
};