/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OneYear } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OneYearUpdateFormInputValues = {
    name?: string;
    price?: number;
};
export declare type OneYearUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OneYearUpdateFormOverridesProps = {
    OneYearUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OneYearUpdateFormProps = React.PropsWithChildren<{
    overrides?: OneYearUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oneYear?: OneYear;
    onSubmit?: (fields: OneYearUpdateFormInputValues) => OneYearUpdateFormInputValues;
    onSuccess?: (fields: OneYearUpdateFormInputValues) => void;
    onError?: (fields: OneYearUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OneYearUpdateFormInputValues) => OneYearUpdateFormInputValues;
    onValidate?: OneYearUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OneYearUpdateForm(props: OneYearUpdateFormProps): React.ReactElement;
