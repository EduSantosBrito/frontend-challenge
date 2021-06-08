import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

export type VariantPropertiesType<T extends string | number | symbol, P = {}> = (
    theme: DefaultTheme,
    customProp?: P,
) => Record<string, Record<T, number | string | FlattenSimpleInterpolation>>;
