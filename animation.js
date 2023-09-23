async function init() {
    const node = document.querySelector("#type-text");
  
    await sleep(1000);
    node.innerText = "";
    await node.type("Prepare to launch.\n");
  
    while (true) {
      await node.type("10");
      await sleep(1500);
      await node.delete("10");
      await node.type("9");
      await sleep(1500);
      await node.delete("9");
      await node.type("8");
      await sleep(1500);
      await node.delete("8");
      await node.type("7");
      await sleep(1500);
      await node.delete("7");
      await node.type("6");
      await sleep(1500);
      await node.delete("6");
      await node.type("5");
      await sleep(1500);
      await node.delete("5");
      await node.type("4");
      await sleep(1500);
      await node.delete("4");
      await node.type("3");
      await sleep(1500);
      await node.delete("3");
      await node.type("2");
      await sleep(1500);
      await node.delete("2");
      await node.type("1");
      await sleep(1500);
      await node.delete("1");
      await node.type("To the Stars!");
      await sleep(10000);
      await node.delete("To the Stars!");
    }
  }
  
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
  
class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
      const randomMs = 100 * Math.random();
      return randomMs < 50 ? 10 : randomMs;
    }
  
async type(text) {
      for (let character of text) {
        this.innerText += character;
        await sleep(this.typeInterval);
      }
    }
  
async delete(text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length - 1);
        await sleep(this.typeInterval);
      }
    }
}
  
customElements.define("type-async", TypeAsync, { extends: "span" });
  
init();
  