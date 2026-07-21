import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { expect, test } from '@playwright/test';

type MediaManifest = {
  sourceCommit: string;
  conversion: { tool: string; command: string };
  assets: Array<{
    sourcePath: string;
    sourceBlob: string;
    sourceSha256: string;
    targetPath: string;
    targetSha256: string;
  }>;
};

const root = process.cwd();
const sha256 = (value: Buffer) => createHash('sha256').update(value).digest('hex');

test('committed Sidekick screenshots are bound to reproducible source assets', async () => {
  const manifest = JSON.parse(
    await readFile(path.join(root, 'sidekick/media-source/manifest.json'), 'utf8'),
  ) as MediaManifest;

  expect(manifest.sourceCommit).toMatch(/^[0-9a-f]{40}$/);
  expect(manifest.conversion.tool).toMatch(/^cwebp /);
  expect(manifest.conversion.command).toContain('-q 88');
  expect(manifest.assets).toHaveLength(5);

  for (const asset of manifest.assets) {
    expect(asset.sourceBlob).toMatch(/^[0-9a-f]{40}$/);
    expect(sha256(await readFile(path.join(root, asset.sourcePath)))).toBe(asset.sourceSha256);
    expect(sha256(await readFile(path.join(root, asset.targetPath)))).toBe(asset.targetSha256);
  }
});