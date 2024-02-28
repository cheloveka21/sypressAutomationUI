import { IFrameHomePage } from "../../pages/IframeHomeWork";

describe("IFRAMEHOMEWORK~", () => {
  beforeEach(() => {
    IFrameHomePage.visit();
  });
  it("iframe1", () => {
    IFrameHomePage.getIframe1();
  });
  it("iframe2", () => {
    IFrameHomePage.getIframe2();
  });
  it.only("iframe3", () => {
    IFrameHomePage.getIframe3();
  });
});
