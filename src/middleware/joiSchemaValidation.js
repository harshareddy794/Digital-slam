// import constant from "../constants/index";
import flash from "connect-flash";

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

const validateBody = (data,schema) => {
  return (req, res, next) => {
      const error = validateObjectSchema(data, schema);
// ----------------------------------- Have to change here for multiple validation errors -------------------------
      if (error) {
        req.flash("error",error[0].error);
        res.redirect("back");
      }else{
        return next();
      }
  };
};

const validateQueryParams = (schema) => {
  return (req, res, next) => {
    try {
      const error = validateObjectSchema(req.query, schema);
      if (error) {
        req.flash("error",error[0].error);
        res.redirect("back");
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