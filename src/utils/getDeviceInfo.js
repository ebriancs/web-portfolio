import { getUserPublicIP } from "../api/common";

export const getDeviceInfo = async () => {
  try {
    // GET DEVICE INFORMATION
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const referrer = document.referrer;

    // GET USER PUBLIC IP
    const ip = await getUserPublicIP();

    return {
      userAgent,
      platform,
      language,
      ip,
      referrer,
    };
  } catch (error) {
    console.error("ERROR getDeviceInfo: ", error);
  }
};
