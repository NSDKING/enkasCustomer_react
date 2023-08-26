/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountCreateFormInputValues = {
    mail?: string;
    passe?: string;
    profil?: string;
    endDateAccount?: string;
    endDateProfil?: string;
    pin?: string;
    free?: boolean;
    service?: string;
};
export declare type AccountCreateFormValidationValues = {
    mail?: ValidationFunction<string>;
    passe?: ValidationFunction<string>;
    profil?: ValidationFunction<string>;
    endDateAccount?: ValidationFunction<string>;
    endDateProfil?: ValidationFunction<string>;
    pin?: ValidationFunction<string>;
    free?: ValidationFunction<boolean>;
    service?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateFormOverridesProps = {
    AccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mail?: PrimitiveOverrideProps<TextFieldProps>;
    passe?: PrimitiveOverrideProps<TextFieldProps>;
    profil?: PrimitiveOverrideProps<TextFieldProps>;
    endDateAccount?: PrimitiveOverrideProps<TextFieldProps>;
    endDateProfil?: PrimitiveOverrideProps<TextFieldProps>;
    pin?: PrimitiveOverrideProps<TextFieldProps>;
    free?: PrimitiveOverrideProps<SwitchFieldProps>;
    service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onSuccess?: (fields: AccountCreateFormInputValues) => void;
    onError?: (fields: AccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onValidate?: AccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm(props: AccountCreateFormProps): React.ReactElement;
