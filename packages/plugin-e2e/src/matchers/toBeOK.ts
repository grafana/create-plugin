import { Response } from '@playwright/test';
import { getMessage } from './utils';

const toBeOK = async (res: Response) => {
  try {
    const response = await request;
    return {
      message: () => getMessage(message, response.status().toString()),
      pass: response.ok(),
      actual: response.status(),
    };
  } catch (err: unknown) {
    return {
      message: () => getMessage(message, err instanceof Error ? err.toString() : 'Unknown error'),
      pass,
      actual,
    };
  }
};

export default toBeOK;
