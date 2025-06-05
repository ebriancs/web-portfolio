import emailjs from '@emailjs/browser';

export const sendDeviceEmail = async (deviceInfo) => {
  const { ip, userAgent, platform, language, referrer } = deviceInfo;

  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID_VISITOR,
    {
      ip,
      userAgent,
      platform,
      language,
      referrer,
      time: new Date().toLocaleString(),
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
