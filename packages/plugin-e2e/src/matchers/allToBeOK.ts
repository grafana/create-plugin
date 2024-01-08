import { Response } from '@playwright/test';
import { getMessage } from './utils';

const allToBeOK = async (responses: Response[]) => {
  const expectedMessage = 'Response status code is within 200..299 range.';
  const failedResponses = responses.filter((response) => !response.ok());

  if (failedResponses.length) {
    const failedStatuses = failedResponses.map((r) => r.status()).join(',');
    return {
      message: () => getMessage(expectedMessage, `Received status: ${failedStatuses}`),
      pass: false,
      actual: failedResponses,
    };
  }

  return {
    message: () => expectedMessage,
    pass: true,
    actual: 200,
  };
  // try {

  //   for (const response of responses) {
  //     expect(response).toBeOK();
  //   }
  //   return {
  //     message: () => '',
  //     pass: true,
  //     actual: 200,
  //   };
  // } catch (err: unknown) {
  //   return {
  //     message: () => getMessage(message, err instanceof Error ? err.toString() : 'Unknown error'),
  //     pass,
  //     actual,
  //   };
  // }
};

export default allToBeOK;
