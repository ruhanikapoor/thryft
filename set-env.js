const fs = require('fs');
const path = require('path');

async function setupEnvironment() {
  const dotenv = await import('dotenv');
  const dotenvExpand = await import('dotenv-expand');

  const myEnv = dotenv.config({ path: path.resolve(process.cwd(), '.env') });
  dotenvExpand.expand(myEnv);

  const targetEnv = process.argv[2] || 'development';
  const isProd = targetEnv === 'production';

  const targetPath = isProd
    ? './src/environments/environment.ts'
    : './src/environments/environment.development.ts';

  const templatePath = './src/environments/environment.ts.template';

  console.log(`Generating environment file for '${targetEnv}' at '${targetPath}'...`);

  if (!fs.existsSync(templatePath)) {
    console.error(`ERROR: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  let templateContent = fs.readFileSync(templatePath, 'utf8');

  templateContent = templateContent
    .replace(/\$\{isProd\}/g, isProd)
    .replace(/\$\{NG_APP_FIREBASE_API_KEY\}/g, process.env.NG_APP_FIREBASE_API_KEY)
    .replace(/\$\{NG_APP_FIREBASE_AUTH_DOMAIN\}/g, process.env.NG_APP_FIREBASE_AUTH_DOMAIN)
    .replace(/\$\{NG_APP_FIREBASE_DATABASE_URL\}/g, process.env.NG_APP_FIREBASE_DATABASE_URL)
    .replace(/\$\{NG_APP_FIREBASE_PROJECT_ID\}/g, process.env.NG_APP_FIREBASE_PROJECT_ID)
    .replace(/\$\{NG_APP_FIREBASE_STORAGE_BUCKET\}/g, process.env.NG_APP_FIREBASE_STORAGE_BUCKET)
    .replace(/\$\{NG_APP_FIREBASE_MESSAGING_SENDER_ID\}/g, process.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID)
    .replace(/\$\{NG_APP_FIREBASE_APP_ID\}/g, process.env.NG_APP_FIREBASE_APP_ID);

  fs.writeFileSync(targetPath, templateContent);

  console.log('Environment file generated successfully.');
}

setupEnvironment().catch(err => {
  console.error('Failed to set up environment:', err);
  process.exit(1);
});
