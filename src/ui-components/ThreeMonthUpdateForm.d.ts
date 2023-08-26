/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ThreeMonth } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThreeMonthUpdateFormInputValues = {
    name?: string;
    price?: number;
};
export declare type ThreeMonthUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreeMonthUpdateFormOverridesProps = {
    ThreeMonthUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThreeMonthUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThreeMonthUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    threeMonth?: ThreeMonth;
    onSubmit?: (fields: ThreeMonthUpdateFormInputValues) => ThreeMonthUpdateFormInputValues;
    onSuccess?: (fields: ThreeMonthUpdateFormInputValues) => void;
    onError?: (fields: ThreeMonthUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreeMonthUpdateFormInputValues) => ThreeMonthUpdateFormInputValues;
    onValidate?: ThreeMonthUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThreeMonthUpdateForm(props: ThreeMonthUpdateFormProps): React.ReactElement;
