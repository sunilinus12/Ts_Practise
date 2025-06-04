import axios, { CancelTokenSource } from "axios";

export const SearchQuery = async (e: string, cancelToken: any) => {
  try {
    const resp = await axios.get(
      "https://www.onemap.gov.sg/api/common/elastic/search?searchVal=" + e + "&returnGeom=N&getAddrDetails=Y&pageNum=1",
      {
        cancelToken
      }
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
