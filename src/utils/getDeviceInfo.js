import { getUserPublicIP } from "../api/common";

export const getDeviceInfo = async () => {
  try {
    // GET DEVICE INFORMATION
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;

    // GET USER PUBLIC IP
    const ip = getUserPublicIP();

    return {
      userAgent,
      platform,
      language,
      ip,
    };
  } catch (error) {
    console.error("ERROR getDeviceInfo: ", error);
  }
};
