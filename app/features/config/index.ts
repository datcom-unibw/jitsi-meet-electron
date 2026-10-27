
export default {
    /**
     * The URL with extra information about the app / service.
     */
    aboutURL: 'https://jitsi.org/what-is-jitsi/',

    /**
     * The URL to the source code repository.
     */
    sourceURL: 'https://github.com/datcom-unibw/jitsi-meet-electron',

    /**
     * Application name.
     */
    appName: 'AnSi Meet',

    /**
    * The prefix for application protocol.
    * You will also need to replace this in package.json.
    */
    appProtocolPrefix: 'jitsi-meet',

    /**
     * The default server URL of Jitsi Meet Deployment that will be used.
     */
    defaultServerURL: 'https://jm.ansi.inf.unibw.de',

    /**
     * The default server Timeout in seconds.
     */
    defaultServerTimeout: 30,

    /**
     * URL to send feedback.
     */
    feedbackURL: 'mailto:admin@ansi.inf.unibw.de',

    /**
     * The URL of Privacy Policy Page.
     */
    privacyPolicyURL: 'https://jm.ansi.inf.unibw.de/privacy.html',

    /**
     * The URL of Terms and Conditions Page.
     */
    termsAndConditionsURL: 'https://jm.ansi.inf.unibw.de/terms.html',

    /**
     * The URL of the german AnSi Meet help.
     */
    deHelpURL: 'https://jm.ansi.inf.unibw.de/ansi_jitsi-meet_nutzeranleitung.pdf',

    /**
     * OIDC provider URL (Keycloak). Popups matching this URL prefix are opened
     * inside Electron (not the system browser) so that the SSO redirect flow
     * (sso.html postMessage) works. Empty -> no OIDC popup handling (default:
     * all unknown popups go to the system browser).
     */
    oidcProviderURL: 'https://auth.unibw.de'
};
