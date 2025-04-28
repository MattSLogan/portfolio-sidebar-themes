/**
 * Copyright 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-sidebar.js";
import "@haxtheweb/scroll-button/scroll-button.js";

/**
 * `portfolio-sidebar-themes`
 *
 * @demo index.html
 * @element portfolio-sidebar-themes
 */
export class PortfolioSidebarThemes extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar-themes";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-themes.ar.json", import.meta.url)
          .href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(
            --portfolio-sidebar-theme-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        portfolio-sidebar {
          display: block;
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .Home {
          margin-left: 250px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <portfolio-sidebar></portfolio-sidebar>
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <div class="Home">
        <h1>Home</h1>
        <p>
          This is a test
        </p>
      </div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
     
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
   }
}

globalThis.customElements.define(
  PortfolioSidebarThemes.tag,
  PortfolioSidebarThemes
);