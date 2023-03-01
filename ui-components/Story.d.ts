/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Post, Testimonial } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryOverridesProps = {
    Story?: PrimitiveOverrideProps<FlexProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    ReadTime?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    postModel?: Post;
    testimonial?: Testimonial;
} & {
    overrides?: StoryOverridesProps | undefined | null;
}>;
export default function Story(props: StoryProps): React.ReactElement;
