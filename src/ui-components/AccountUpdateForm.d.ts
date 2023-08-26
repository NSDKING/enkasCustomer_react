/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountUpdateFormInputValues = {
    mail?: string;
    passe?: string;
    profil?: string;
    endDateAccount?: string;
    endDateProfil?: string;
    pin?: string;
    free?: boolean;
    service?: string;
};
export declare type AccountUpdateFormValidationValues = {
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
export declare type AccountUpdateFormOverridesProps = {
    AccountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mail?: PrimitiveOverrideProps<TextFieldProps>;
    passe?: PrimitiveOverrideProps<TextFieldProps>;
    profil?: PrimitiveOverrideProps<TextFieldProps>;
    endDateAccount?: PrimitiveOverrideProps<TextFieldProps>;
    endDateProfil?: PrimitiveOverrideProps<TextFieldProps>;
    pin?: PrimitiveOverrideProps<TextFieldProps>;
    free?: PrimitiveOverrideProps<SwitchFieldProps>;
    service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    account?: Account;
    onSubmit?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onSuccess?: (fields: AccountUpdateFormInputValues) => void;
    onError?: (fields: AccountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onValidate?: AccountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountUpdateForm(props: AccountUpdateFormProps): React.ReactElement;
