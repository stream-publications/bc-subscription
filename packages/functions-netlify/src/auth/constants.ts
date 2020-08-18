require("dotenv").config();

export const COOKIE_NAME =
  process.env.COOKIE_NAME || "bc_subscription_session_";
export const JWT_SECRET = process.env.COOKIE_NAME || "bc_subscription_session_";
