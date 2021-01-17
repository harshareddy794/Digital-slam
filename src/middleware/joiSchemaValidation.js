// import constant from "../constants/index";

const validateObjectSchema = (data, schema) => {
  const validation = schema.validate(data, { convert: false });
  if (validation.error) {
    const errorDetails = validation.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      const error = validateObjectSchema(req.body, schema);
// ----------------------------------- Have to change here for multiple validatiopn errors -------------------------
      if (error) {
        throw new Error(error[0].error);
      }
    } catch (error) {
      throw new Error(error);
    }
    return next();
  };
};

const validateQueryParams = (schema) => {
  return (req, res, next) => {
    try {
      const error = validateObjectSchema(req.query, schema);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
    return next();
  };
};

export default {
  validateQueryParams,
  validateBody,
  validateObjectSchema,
};