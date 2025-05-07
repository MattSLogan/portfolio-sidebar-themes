/**
 * Copyright 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */

import { LitElement, html, css } from "lit";

export class PortfolioSidebar extends LitElement {
  static get tag() {
    return "portfolio-sidebar";
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100vh;
      background-color: #121212;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      padding-top: 60px;
      box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3);
      z-index: 10;
    }

    .nav-link {
      display: block;
      padding: 15px 20px;
      font-size: 16px;
      text-decoration: none;
      color: white;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .nav-link:hover {
      background-color: #b91d1d;
    }
  `;

  render() {
    return html`
      <a class="nav-link" @click=${() => this.scrollToSection(0)}>Home Page</a>
      <a class="nav-link" @click=${() => this.scrollToSection(1)}>Technical Skills</a>
      <a class="nav-link" @click=${() => this.scrollToSection(2)}>Work Experience / Involvement</a>
      <a class="nav-link" @click=${() => this.scrollToSection(3)}>Contact Me Here</a>
    `;
  }

  scrollToSection(sectionIndex) {
    const sections = document.querySelectorAll("portfolio-sidebar-screen");
    if (sections && sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
      console.log("Scrolled to section:", sectionIndex);
    } else {
      console.warn("Could not find section:", sectionIndex);
    }
  }
}

customElements.define(PortfolioSidebar.tag, PortfolioSidebar);