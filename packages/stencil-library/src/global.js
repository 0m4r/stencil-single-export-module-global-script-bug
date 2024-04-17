export default async function global() {
  console.log("global // start")
  document.documentElement.setAttribute("data-global", "true");
  console.log("global // end")
}
