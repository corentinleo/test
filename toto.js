try {
    // Get front servers list from ansible inventory
    const doc = yaml.load(fs.readFileSync('infra/ansible/playbooks/lemapp-prod/inventory/hosts.yml', 'utf8'));
    const frontServers = Object.keys(doc.deploy?.children?.fronts?.hosts);
    for (const host of frontServers) {
      await printIPs4(host);
    }
    for (const host of frontServers) {
      await printIPs6(host);
    }
  } catch (err) {
    console.error(`Unable to get servers from inventory ${err}`);
    process.exit(1);
  }