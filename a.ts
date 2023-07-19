const fnfttypes = require('./ts/flux/indexer/fnft/query.ts');

async function loadProtoFile() {
  try {
    console.log(fnfttypes)
  } catch (error) {
    console.error("Failed to load protobuf file:", error);
  }
}

loadProtoFile();
