/**
 * Copyright 2025 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioSidebarScreen extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.bgColor = "#ffffff";
  }

  static get properties() {
    return {
      title: { type: String },
      bgColor: { type: String },
      pagenumber: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--ddd-theme-accent, white);
        color: black
      }
      .wrapper {
        padding: 20px;
      }
      ::slotted(*) 
      {
      color: black !important; 
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h2>${this.title}</h2>
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.dispatchEvent(
      new CustomEvent("page-added", {
        bubbles: true,
        composed: true,
        detail: { value: this, title: this.title },
      })
    );
  }
}

customElements.define(PortfolioSidebarScreen.tag, PortfolioSidebarScreen);