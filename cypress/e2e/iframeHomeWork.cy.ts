import { IFrameHomePage } from "../../pages/IframeHomeWork";

describe("IFRAMEHOMEWORK~", () => {
  beforeEach(() => {
    IFrameHomePage.visit();
  });
  it("iframeFirst", () => {
    IFrameHomePage.getIframeHomeWork();
  });
});
