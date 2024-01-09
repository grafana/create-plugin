import { Response } from '@playwright/test';
import { getMessage } from './utils';

const toBeOK = async (res: Response | Response[]) => {
  let pass, actual, message;
  let expected: any = 'Response status code is within 200..299 range.';

  if (Array.isArray(res)) {
    const statusCodes = res.map((r) => r.status()).join(',');
    pass = res.every((response) => response.ok());
    actual = statusCodes;
    message = () => getMessage(expected, statusCodes);
  } else {
    pass = res.ok();
    actual = res.status();
    message = () => getMessage(expected, res.status().toString());
  }

  return {
    message,
    pass,
    actual,
  };
};

export default toBeOK;
