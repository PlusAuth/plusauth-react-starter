import { Log, UserManager } from "oidc-client";
import Constants from "../helpers/constants";

const settings = {
  authority: Constants.authUrl,
  client_id: Constants.clientId,
  redirect_uri: window.location.origin + `/signin-callback.html`,
  silent_redirect_uri: window.location.origin + `/silent-renew.html`,
  post_logout_redirect_uri: window.location.origin ,
  response_type: "code",
  scope: "openid profile",
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true,
};

const userManager = new UserManager(settings);

Log.logger = console;
Log.level = Log.INFO;

export default userManager;
