const fs = require('fs');
const path = require('path');
const readline = require('readline');

let ip = process.argv[2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askForIP = () => {
  return new Promise((resolve) => {
    rl.question('📍 Please enter your IP address: ', (answer) => {
      resolve(answer.trim());
    });
  });
};

const validateAndSetIP = async () => {
  if (!ip) {
    console.log('❌ No IP address provided.');
    ip = await askForIP();
  }

  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (!ipRegex.test(ip)) {
    console.error('❌ Error: Invalid IP format.');
    console.log('📖 Valid format example: 192.168.0.7');
    rl.close();
    process.exit(1);
  }

  const examplePath = path.join(__dirname, '..', 'src', 'api', 'ip-example.ts');
  const targetPath = path.join(__dirname, '..', 'src', 'api', 'ip.ts');

  try {
    const exampleContent = fs.readFileSync(examplePath, 'utf8');
    
    const newContent = exampleContent
      .replace('const ip = "your_ip"', `const ip = "${ip}"`)
      .replace('// export default ip;', 'export default ip;');
    
    fs.writeFileSync(targetPath, newContent);
    
    console.log('✅ ip.ts file created successfully!');
    console.log(`📍 IP configured: ${ip}`);
    console.log(`🔗 API URL: http://${ip}:8010/`);
    console.log('');
    console.log('🚀 Now you can run: npm start');
    
  } catch (error) {
    console.error('❌ Error creating ip.ts file:', error.message);
    process.exit(1);
  }

  rl.close();
};

validateAndSetIP();
