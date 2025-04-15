import { html, fixture, expect } from '@open-wc/testing';
import "../portfolio-sidebar-themes.js";

describe("PortfolioSidebarThemes test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <portfolio-sidebar-themes
        title="title"
      ></portfolio-sidebar-themes>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
