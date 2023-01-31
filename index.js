const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey(2356));
console.log(deterministicPartitionKey("String test"));
console.log(deterministicPartitionKey({ name: "test", partitionKey: "abc" }));
console.log(
  deterministicPartitionKey([
    {
      name: "test",
      partitionKey:
        "b704463b1b3cf3cf752382c1f1843d503074fac01c2aa7683d2982c8a3ff1fd58b949a15cf031780e8c2b69e6f7fd9e54a0877540dca0edd56c87323882d5693",
    },
    {
      name: "test",
      partitionKey:
        "b704463b1b3cf3cf752382c1f1843d503074fac01c2aa7683d2982c8a3ff1fd58b949a15cf031780e8c2b69e6f7fd9e54a0877540dca0edd56c87323882d5693",
    },
  ])
);
