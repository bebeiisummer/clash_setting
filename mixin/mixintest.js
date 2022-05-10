module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {
  const proxyGroups = [
    { name: "Steam", type: "select", proxies: ["🚀 节点选择", "DIRECT"] },
    { name: "Epic", type: "select", proxies: ["🚀 节点选择", "DIRECT"] },
    { name: "Application", type: "select", proxies: ["🚀 节点选择", "DIRECT"] },
  ];
  content["proxy-groups"] = [...proxyGroups, ...content["proxy-groups"]];
  const ruleProviders = {
    steam: {
      type: "http",
      behavior: "domain",
      path: "./ruleset/steam.yaml",
      interval: 86400,
    },
    epic: {
      type: "http",
      behavior: "domain",
      path: "./ruleset/epic.yaml",
      interval: 86400,
    },
    applications: {
      type: "http",
      behavior: "classical",
      path: "./ruleset/applications.yaml",
      interval: 86400,
    },
  };
  content["rule-providers"] = {
    ...ruleProviders,
    ...content["rule-providers"],
  };
  const rules = [
    "RULE-SET,steam,Steam",
    "RULE-SET,epic,Epic",
    "RULE-SET,applications,Application",
  ];
  content["rules"] = [...rules, ...content["rules"]];
  return content;
};
