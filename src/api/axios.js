import axios from "axios";
import md5 from "md5";

export const baseURL = "http://gateway.marvel.com/v1/public/characters?";
export const publicKey = "f89f3fa289d84b2a5ae78178b7ba83df";
export const privateKey = "d53791108c857c5e2edc76c32420f4b842f6651c";
export const time = Number(new Date());
export const hash = md5(Number(new Date()) + privateKey + publicKey);

export const baseAxios = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
});

export const apiAllComics = () =>
  baseAxios.get(`/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`);

export const apiAllCharacters = async (payload) => {
  return payload === ""
    ? await baseAxios.get(
        `/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
    : await baseAxios.get(
        `/characters?nameStartsWith=${"a"}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
};

export const apiCharacter = async (payload) =>
  await baseAxios.get(
    `/characters/${payload}?ts=${time}&apikey=${publicKey}&hash=${hash}`
  );
