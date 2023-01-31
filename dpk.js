const crypto = require("crypto");

const createHash = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

const deterministicPartitionKey = (event) =>
  event
    ? event.partitionKey?.length <= 256
      ? event.partitionKey
      : createHash(JSON.stringify(event))
    : "0";

exports.createHash = createHash;
exports.deterministicPartitionKey = deterministicPartitionKey;
