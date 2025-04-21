const fs = require('fs-extra');
const archiver = require('archiver');
const path = require('path');

module.exports = async function generateCode(platform, flow) {
  const templateDir = path.join(__dirname, '../templates', platform);
  const exportDir = path.join(__dirname, '../exports', `${Date.now()}-${platform}`);

  await fs.copy(templateDir, exportDir);

  const logic = `// Generated logic based on flow: ${JSON.stringify(flow)}`;
  await fs.writeFile(path.join(exportDir, 'logic.js'), logic);

  const zipPath = exportDir + '.zip';
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip');
  archive.pipe(output);
  archive.directory(exportDir, false);
  await archive.finalize();

  return zipPath;
};