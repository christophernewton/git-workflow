import { createGitgraph, TemplateName, templateExtend } from "@gitgraph/js";
// Get the graph container HTML element.
const graphContainer = document.getElementById("hotfixChange");

// Instantiate the graph.
const Revium = templateExtend(TemplateName.Metro, {
  colors: ["#0C0A3E", "#7B1E7A", "#B33F62", "#F9564F", "#F3C677"],
  branch: {
    lineWidth: 4,
    spacing: 50,
    label: {
      font: "normal 10pt Arial",
      displayAuthor: false
    }
  },
  commit: {
    spacing: 60,
    dot: {
      size: 16,
      strokeColor: "#000000",
      strokeWidth: 2
    },
    message: {
      displayAuthor: false,
      font: "normal 10pt Arial"
    }
  }
});
const gitgraph = createGitgraph(graphContainer, {
  template: Revium
});

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("master");
master.commit("Initial commit");

const staging = gitgraph.branch("staging");
staging.commit("Initial commit");

const dev = gitgraph.branch("dev");
dev.commit("Initial commit");

const feature1 = gitgraph.branch("feature/30000-new-navigation-menu");

feature1
  .commit("created navigation")
  .commit("updated navigation js so that it works in IE11");

const hotfix = master.branch("hotfix/30001-iis-webconfig-update");

hotfix.commit("fixed 500 error on server");

master.merge(hotfix);

feature1.commit("added hover state color for desktop");
