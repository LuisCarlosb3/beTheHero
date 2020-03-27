const generateUniqueId = require("../../src/utils/generateUniqueId");
describe("Generate UniqueID", () => {
  it("Should generate an unique ID", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
