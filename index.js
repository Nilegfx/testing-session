import * as votesApi from "./api";
import { transformOptions } from "./transformer";

const generateErrorMessage = (status_code, message) => {
  return `${message} ${status_code}`;
};

export const addOneVote = async (id) => {
  try {
    const { data: options } = await votesApi.addVote(id);

    const votesData = transformOptions(options);

    return { resData: { error: false, votesData } };
  } catch (err) {
    const { response } = err;
    const { message: errMessage } = err;

    if (!response) {
      return {
        resData: { error: true, message: errMessage },
      };
    }

    const {
      data: { message, status_code },
    } = response;

    const errorMessage = generateErrorMessage(status_code, message);

    return {
      resData: { error: true, message: errorMessage },
    };
  }
};
