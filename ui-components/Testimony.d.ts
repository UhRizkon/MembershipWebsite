/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Testimonial } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonyOverridesProps = {
    Testimony?: PrimitiveOverrideProps<ViewProps>;
    ContentGroup?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Testimony31493208?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dui, sed potenti et rhoncus ut. Odio diam sit rhoncus mauris. Nunc eros, turpis eleifend justo vulputate ipsum."?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TestimonyProps = React.PropsWithChildren<Partial<ViewProps> & {
    testimonyModel?: Testimonial;
} & {
    overrides?: TestimonyOverridesProps | undefined | null;
}>;
export default function Testimony(props: TestimonyProps): React.ReactElement;
