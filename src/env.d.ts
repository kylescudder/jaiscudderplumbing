interface ImportMetaEnv {
  readonly MAILJET_USER: string;
  readonly MAILJET_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
