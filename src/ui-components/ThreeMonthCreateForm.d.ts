/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThreeMonthCreateFormInputValues = {
    name?: string;
    price?: number;
};
export declare type ThreeMonthCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreeMonthCreateFormOverridesProps = {
    ThreeMonthCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThreeMonthCreateFormProps = React.PropsWithChildren<{
    overrides?: ThreeMonthCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThreeMonthCreateFormInputValues) => ThreeMonthCreateFormInputValues;
    onSuccess?: (fields: ThreeMonthCreateFormInputValues) => void;
    onError?: (fields: ThreeMonthCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreeMonthCreateFormInputValues) => ThreeMonthCreateFormInputValues;
    onValidate?: ThreeMonthCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThreeMonthCreateForm(props: ThreeMonthCreateFormProps): React.ReactElement;
