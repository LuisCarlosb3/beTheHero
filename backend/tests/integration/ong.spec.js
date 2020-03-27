const request = require("supertest");
const app = require("../../src/app");
const ongs = require("../../src/database/models/index").ong;
let ongToCreate = {
  name: "GATUNO",
  email: "gatuno@gmail.com",
  whatsapp: "92991256061",
  city: "Itacoatiara",
  uf: "AM"
};
describe("ONG", () => {
  beforeAll(async () => {
    await ongs.destroy({ where: {} });
  });
  test("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post(`/ongs`)
      .send(ongToCreate);
    expect(response.status).toBe(201);
    expect(response.body.ong).not.toBeNull();
    expect(response.body.ong).toHaveProperty("id");
  });

  const testTemplate = async data => {
    const response = await request(app)
      .post(`/ongs`)
      .send({
        ...ongToCreate,
        ...data
      });
    expect(response.status).toBe(400);
    expect(response.body).not.toHaveProperty("ong");
    expect(response.body).toHaveProperty("error");
    expect(response.body).toHaveProperty("message");
  };
  test("should be able to reject a invalid name at create ONG", async () => {
    testTemplate({
      name: ""
    });
  });
  test("should be able to reject a invalid email at create ONG", async () => {
    testTemplate({
      email: "GATUcom"
    });
  });
  test("should be able to reject a invalid whatsapp at create ONG", async () => {
    testTemplate({
      whatsapp: ""
    });
  });
  test("should be able to reject a larger whatsapp num at create ONG", async () => {
    testTemplate({
      whatsapp: "929456821599"
    });
  });
  test("should be able to reject a invalid city at create ONG", async () => {
    testTemplate({
      city: ""
    });
  });
  test("should be able to reject a invalid uf at create ONG", async () => {
    testTemplate({
      uf: "UFA"
    });
  });
  test("should be able to reject a null uf at create ONG", async () => {
    testTemplate({
      uf: ""
    });
  });
});
