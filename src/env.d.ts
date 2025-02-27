/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime { }
}

interface ImportMetaEnv {
	readonly ADMIN_EMAIL?: string;
	readonly EMAIL_FROM?: string;
	readonly EMAIL_SERVER_HOST?: string;
	readonly EMAIL_SERVER_PORT?: string;
	readonly EMAIL_SERVER_USER?: string;
	readonly EMAIL_SERVER_PASSWORD?: string;
	readonly EMAIL_SERVER_SECURE?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
