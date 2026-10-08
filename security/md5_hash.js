import crypto from "node:crypto";

const password = "123456";
const hash = crypto.createHash("md5").update(password).digest("hex");
console.log(hash);
