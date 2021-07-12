import { addOneVote } from "./index";
import * as votesApi from "./api";

jest.mock("./api");

describe("temp", () => {
  it("should temp", async () => {
    votesApi.addVote.mockResolvedValue({ data: { name: "ahmed" } });

    const result = await addOneVote();
    expect(result).toEqual({
      resData: { error: false, votesData: { name: "ahmed" } },
    });
  });

  it("should reject if with response exists", async () => {
    votesApi.addVote.mockRejectedValue({
      response: { data: { message: "hi", status_code: 10 } },
    });
    const result = await addOneVote();
    expect(result).toEqual({
      resData: { error: true, message: "hi 10" },
    });
  });

  it("should reject if no response returned", async () => {
    votesApi.addVote.mockRejectedValue({
      message: "hi2",
    });
    const result = await addOneVote();
    expect(result).toEqual({
      resData: { error: true, message: "hi2" },
    });
  });
});
