import axios from "axios";

const { REACT_APP_BACKEND_DOMAIN } = process.env;

// SEND CONTACT FORM DATA TO API
export const sendContactFormData = async (payload) => {
  try {
    const url = `${REACT_APP_BACKEND_DOMAIN}/api/contact/`;
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(url, payload, { headers });
    return response;
  } catch (error) {
    console.error("ERROR sendContactFormData:", error);
  }
};

// SEND DEVICE INFORMATION TO API
export const sendDeviceData = async (payload) => {
  try {
    const url = `${REACT_APP_BACKEND_DOMAIN}/api/device-info/`;
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(url, payload, { headers });
    return response;
  } catch (error) {
    console.error("ERROR sendDeviceData:", error);
  }
};

// GET USER PUBLIC IP ADDRESS FROM EXTERNAL API
export const getUserPublicIP = async () => {
  try {
    const url = "https://api.ipify.org?format=json";
    const response = await axios.get(url);
    const ip = response.data.ip;

    return ip;
  } catch (error) {
    console.error("ERROR getUserPublicIP:", error);
  }
};
