import md5 from "crypto-js/md5";
import { marvelApi } from "./marvelApi";

const publicKey = '7c5029f7b50a47a3c120d58cd534fc1f';
const privateKey = '5aecd9cc3da4649ad0f351c8667e651dd3f65054';

const getAuthParams = () => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey).toString();

  return { ts, apikey: publicKey, hash };
};

export const fetchCharacters = async () => {
  try {
    const response = await marvelApi.get("/characters", {
      params: { ...getAuthParams(), limit: 20 },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
};

export const fetchCharacterByName = async (name: string) => {
  try {
    const response = await marvelApi.get("/characters", {
      params: { ...getAuthParams(), name },
    });
    return response.data.data.results[0];
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    throw error;
  }
};