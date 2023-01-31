const { deterministicPartitionKey, createHash } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns the partitionKey when length <= 256", () => {
    const event = { partitionKey: "key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("key");
  });

  it("returns the hash of the event stringified when length > 256", () => {
    const event = { partitionKey: "key".repeat(100) };
    const result = deterministicPartitionKey(event);
    expect(result).toMatch(/^[a-f0-9]+$/);
  });

  it("returns 0 when event is undefined", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("returns a hash of the stringified event when the event has no partition key", () => {
    const event = { someKey: "someValue" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(createHash(JSON.stringify(event)));
  });
});
