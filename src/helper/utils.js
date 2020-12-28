//  File for global function
import domPurify from "dompurify";

const purifyDOM = async(data) => {
    return domPurify.sanitize(data);
};

export default{
    purifyDOM,
}