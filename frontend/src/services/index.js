import axiosInstance from "../api/index";

export async function bookingService(formData) {
  try {
    const { data } = await axiosInstance.post("/book/add", formData);
    return data;
  } catch (error) {
    console.log("Error in registerService:", error.message || error);
    throw error;
  }
}
export async function checkBookingsService() {
  try {
    const { data } = await axiosInstance.get("/book/check");
    return data;
  } catch (error) {
    console.log("Error in registerService:", error.message || error);
    throw error;
  }
}
