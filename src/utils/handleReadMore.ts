export function handleReadMore() {
  let preview = document.getElementById("preview");
  let complete = document.getElementById("complete");
  let read = document.getElementById("read");

  if (preview.style.display !== "none") {
    preview.style.display = "none";
    complete.style.display = "inline";
    read.style.display = "none";
  }
}