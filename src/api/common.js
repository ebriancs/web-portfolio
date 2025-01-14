import axios from "axios";

// SEND DEVICE INFORMATION TO API
export const sendDeviceData = async (payload) => {
  try {
    const url = "";
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(url, payload, headers);

    return response.data;
  } catch (error) {
    console.error("ERROR sendDeviceData: ", error);
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
    console.error("ERROR getUserPublicIP: ", error);
  }
};
