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

  let arr = [1,2];

  for(const i of arr){
    for(const j of arr){
        console.log('toto')
    }
  }

  Users.find({ 'titi':true}).fetchAsync();

  for(const i of arr){
    for(const j of arr){
        console.log('toto')
        await tutu();
    }
  }


  for(const i of arr){
    for(const j of arr){
        console.log('toto')
    }
  }

  Users.find({ 'titi':true}).fetchAsync();

  for(const i of arr){
    for(const j of arr){
        console.log('toto')
        await tutu();
    }
  }

  this.subscribe('mySUb');




  Meteor.publish('titi',()=> (
return [{titi:true}];

  ))


  this.subscribe('mySUb');




  Meteor.publish('titi',()=> (
return [{titi:true}];

  ))


while(i < 1_000_000){
  i+=1;
}

while(i < 1_000_000){
  i+=1;
}
