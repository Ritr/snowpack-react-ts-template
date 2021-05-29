import devConfig from "./development";
import proConfig from "./production";

class EnvConfig  {
    baseUrl?:string=""
}
const mode = import.meta.env.MODE;
let commonConfig = {};
let config:EnvConfig = {};
if (mode === "development") {
    config = { ...commonConfig, ...devConfig }
} else if (mode === "production") {
    config = { ...commonConfig, ...proConfig }
}
export default config;