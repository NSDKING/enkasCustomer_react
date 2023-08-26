/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FamilyName: "",
    LastName: "",
    city: "",
    mail: "",
    birthdate: "",
    staff: false,
    phoneNumber: "",
    statut: "",
  };
  const [FamilyName, setFamilyName] = React.useState(initialValues.FamilyName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [city, setCity] = React.useState(initialValues.city);
  const [mail, setMail] = React.useState(initialValues.mail);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [staff, setStaff] = React.useState(initialValues.staff);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [statut, setStatut] = React.useState(initialValues.statut);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFamilyName(initialValues.FamilyName);
    setLastName(initialValues.LastName);
    setCity(initialValues.city);
    setMail(initialValues.mail);
    setBirthdate(initialValues.birthdate);
    setStaff(initialValues.staff);
    setPhoneNumber(initialValues.phoneNumber);
    setStatut(initialValues.statut);
    setErrors({});
  };
  const validations = {
    FamilyName: [],
    LastName: [],
    city: [],
    mail: [{ type: "Email" }],
    birthdate: [],
    staff: [],
    phoneNumber: [],
    statut: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FamilyName,
          LastName,
          city,
          mail,
          birthdate,
          staff,
          phoneNumber,
          statut,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new User(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Family name"
        isRequired={false}
        isReadOnly={false}
        value={FamilyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName: value,
              LastName,
              city,
              mail,
              birthdate,
              staff,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.FamilyName ?? value;
          }
          if (errors.FamilyName?.hasError) {
            runValidationTasks("FamilyName", value);
          }
          setFamilyName(value);
        }}
        onBlur={() => runValidationTasks("FamilyName", FamilyName)}
        errorMessage={errors.FamilyName?.errorMessage}
        hasError={errors.FamilyName?.hasError}
        {...getOverrideProps(overrides, "FamilyName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName: value,
              city,
              mail,
              birthdate,
              staff,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city: value,
              mail,
              birthdate,
              staff,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Mail"
        isRequired={false}
        isReadOnly={false}
        value={mail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city,
              mail: value,
              birthdate,
              staff,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.mail ?? value;
          }
          if (errors.mail?.hasError) {
            runValidationTasks("mail", value);
          }
          setMail(value);
        }}
        onBlur={() => runValidationTasks("mail", mail)}
        errorMessage={errors.mail?.errorMessage}
        hasError={errors.mail?.hasError}
        {...getOverrideProps(overrides, "mail")}
      ></TextField>
      <TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city,
              mail,
              birthdate: value,
              staff,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <SwitchField
        label="Staff"
        defaultChecked={false}
        isDisabled={false}
        isChecked={staff}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city,
              mail,
              birthdate,
              staff: value,
              phoneNumber,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.staff ?? value;
          }
          if (errors.staff?.hasError) {
            runValidationTasks("staff", value);
          }
          setStaff(value);
        }}
        onBlur={() => runValidationTasks("staff", staff)}
        errorMessage={errors.staff?.errorMessage}
        hasError={errors.staff?.hasError}
        {...getOverrideProps(overrides, "staff")}
      ></SwitchField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city,
              mail,
              birthdate,
              staff,
              phoneNumber: value,
              statut,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Statut"
        isRequired={false}
        isReadOnly={false}
        value={statut}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FamilyName,
              LastName,
              city,
              mail,
              birthdate,
              staff,
              phoneNumber,
              statut: value,
            };
            const result = onChange(modelFields);
            value = result?.statut ?? value;
          }
          if (errors.statut?.hasError) {
            runValidationTasks("statut", value);
          }
          setStatut(value);
        }}
        onBlur={() => runValidationTasks("statut", statut)}
        errorMessage={errors.statut?.errorMessage}
        hasError={errors.statut?.hasError}
        {...getOverrideProps(overrides, "statut")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
