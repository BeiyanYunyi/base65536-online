import { decode as decodeToAry, encode as encodeAry } from 'base65536';

const encode = (textToEncode: string) => encodeAry(new TextEncoder().encode(textToEncode));

const decode = (textToDecode: string) => {
  try {
    return new TextDecoder().decode(decodeToAry(textToDecode));
  } catch (e) {
    return 'Decode failed: Invalid input';
  }
};

export default { encode, decode };
