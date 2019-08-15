openJiraTicket = function(word){
  var ticket = word.selectionText;
  chrome.tabs.create({url: "https://evitetracking.atlassian.net/browse/" + ticket});
};

chrome.contextMenus.create({
  title: "Open Jira Ticket",
  contexts:["selection"],
  onclick: openJiraTicket
});