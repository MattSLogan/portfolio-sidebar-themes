/**
 * Copyright 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-sidebar.js";

export class PortfolioSidebarThemes extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar-themes";
  }

  constructor() {
    super();
    this.pages = [];
  }

  static get properties() {
    return {
      pages: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrapper {
        margin-left: 270px;
      }
    `;
  }

  render() {
    console.log("📦 Pages in render():", this.pages); 
    return html`
      <portfolio-sidebar .pages=${this.pages}></portfolio-sidebar>
      <div class="wrapper" @page-added=${this.addPage}>
        <slot></slot>
      </div>
    `;
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    };
    console.log("✅ Page added:", page); 
    this.pages = [...this.pages, page];
  }

  firstUpdated() {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#section-", "");
      const page = this.pages.find((p) => p.number == sectionId);
      if (page) {
        page.element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}

customElements.define(PortfolioSidebarThemes.tag, PortfolioSidebarThemes);