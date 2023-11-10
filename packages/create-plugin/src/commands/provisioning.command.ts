import glob from 'glob';
import path from 'path';
import fs from 'fs';
import { TEMPLATE_PATHS, TEXT } from '../constants';
import { compileProvisioningTemplateFile, getTemplateData } from '../utils/utils.templates';
import { confirmPrompt, printMessage, printSuccessMessage } from '../utils/utils.console';

export const provisioning = async () => {
  const provisioningFolder = path.resolve('provisioning');
  try {
    if (await confirmPrompt(TEXT.addProvisioning)) {
      if (!fs.existsSync(provisioningFolder)) {
        const provisioningSpecificFiles = glob.sync(`${TEMPLATE_PATHS.provisioning}/**`, { dot: true });

        provisioningSpecificFiles.forEach((file) => {
          compileProvisioningTemplateFile(file, getTemplateData());
        });
        printSuccessMessage(TEXT.addProvisioningSuccess);
      } else {
        printMessage(`You plugin already has provisioning files located in ${provisioningFolder}`);
        process.exit(0);
      }
    } else {
      printMessage(TEXT.addProvisioningAborted);
      process.exit(0);
    }
  } catch (error) {
    console.error(error);
  }
};
