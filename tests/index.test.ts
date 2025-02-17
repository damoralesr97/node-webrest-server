import { envs } from "../src/config/envs";
import { Server } from "../src/presentation/server";

jest.mock("../src/presentation/server");

describe("Testing Index.ts", () => {
  test("Should call server with arguments and start", async () => {
    await import("../src/index");

    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH,
      routes: expect.any(Function),
    });
    expect(Server.prototype.start).toHaveBeenCalledWith();
  });
});
