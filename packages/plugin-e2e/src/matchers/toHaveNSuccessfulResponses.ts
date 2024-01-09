import { Response, expect } from '@playwright/test';
import { getMessage } from './utils';

const toHaveNSuccessfulResponses = async (responses: Response[], noOfSuccessfulResponses: number) => {
  const actual = responses.filter((response) => response.ok()).length;
  const message = `No of successful responses to be ${noOfSuccessfulResponses}`;

  try {
    expect(responses.filter((response) => response.ok()).length).toEqual(noOfSuccessfulResponses);
    return {
      pass: true,
      actual: false,
      message: () => getMessage(message, actual.toString()),
    };
  } catch (err: unknown) {
    return {
      message: () => getMessage(message, actual.toString()),
      pass: false,
      actual,
    };
  }
};

export default toHaveNSuccessfulResponses;
