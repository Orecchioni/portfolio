// @ts-check
import { defineConfig } from 'astro/config';

// In GitHub Actions ricava site/base da "owner/repo"; in locale resta tutto alla radice.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

// https://astro.build/config
export default defineConfig({
	site: owner ? `https://${owner}.github.io` : undefined,
	base: owner && !isUserSite ? `/${repo}` : '/',
});
