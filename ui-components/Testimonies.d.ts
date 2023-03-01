/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TestimonyProps } from "./Testimony";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimoniesOverridesProps = {
    Testimonies?: PrimitiveOverrideProps<CollectionProps>;
    Testimony?: TestimonyProps;
} & EscapeHatchProps;
export declare type TestimoniesProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TestimonyProps;
} & {
    overrides?: TestimoniesOverridesProps | undefined | null;
}>;
export default function Testimonies(props: TestimoniesProps): React.ReactElement;
