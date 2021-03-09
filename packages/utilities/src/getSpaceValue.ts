export const getSpaceValue = (propName: string, props: any) => {
        const propValue = props.theme.space[props[propName]];

      // Create object from names
        return {
          [propName]: propValue
        }
}