import constant from "../constants/index";

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
    let response = { ...constant.defaultServerResponse };
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      response.message = constant.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    return next();
  };
};

const validateQueryParams = (schema) => {
  return (req, res, next) => {
    let response = { ...constant.defaultServerResponse };
    const error = validateObjectSchema(req.query, schema);
    if (error) {
      response.body = error;
      response.message = constant.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    return next();
  };
};

export default {
  validateQueryParams,
  validateBody,
  validateObjectSchema,
};