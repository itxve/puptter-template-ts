import { Browser, Page } from "puppeteer-core";
import { ulid } from "ulid";

export class PageManager {
  constructor() {}
  pages: { pid: string; page: Page }[] = [];
  async createPage(b: Browser) {
    const newPage = await b.newPage();
    const page = { pid: ulid(), page: newPage };
    this.pages.push(page);
    return page;
  }
  async closePage(pid: string) {
    console.log(`[${pid}] page close`);
    return this.pages.find((e) => e.pid == pid)?.page.close();
  }
}
