var links = document.links;
for (var i = 0; i < links.length; i++) {
  if (
    links[i].href.match(
      /https?:\/\/(www\.)?github.com\/openshift\/openshift-docs\/blob\/+.*\/modules\//
    )
  ) {
    console.info("Updating the following original link to point to the module");
    console.log("%c" + links[i].href, "color: blue");
    links[i].style.textDecoration = "underline green 2px";
    links[i].href = links[i].href.replace(/(?<=\/blob\/(.\w+\/)|(.\w+-\d.\d\/)|(.\w+-\d.\d\d\/)).+\/(?=modules)/, "");
  }
}
