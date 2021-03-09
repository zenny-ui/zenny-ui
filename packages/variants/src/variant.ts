import CSS from 'csstype';

/**
 * A "variant" of CSS styles.
 */
export type VariantType = {
    [key: string]: CSS.Properties
}

/**
 * Config for creating variants using utility function
 */
export type VariantConfig = {
    prop: string;
    variants?: VariantType
}

// Theme only needs variant, and that's not even required
export type StyledVariantTheme = {
    variants?: VariantType
}

// All we need is theme prop from props Styled Components pass
export type StyledProps = {
    theme?: StyledVariantTheme
}

/**
 * Create variant based off user config + override with theme
 */
export const variant = ({ prop, variants }: VariantConfig) => {
  // Return function for Styled Components
  // that grabs the value of the variant prop name
  // and checks for it inside the variants provided (or theme variants)
  return (styledProps: StyledProps) => {
    // Get variants from theme if exist
    const { theme } = styledProps;
    const themeVariants = theme?.variants?.[prop] ? theme.variants[prop] : {};
    // Combine with preset variants
    const variantCache = {
      ...variants,
      ...themeVariants
    };
    // Check what variant "key" the user passed
    const variantKey = styledProps[prop];
    // Return that
    if (variantKey in variantCache) {
      return variantCache[variantKey];
    }
    return ``;
  };
};

export default variant