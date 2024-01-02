
const puppeteer = require('puppeteer');
const TirarPrint = require('./screenshot');
const PegarCores = require('./PegarCores');

async function iniciarPupperteer() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false
    });
    const page = await browser.newPage();
    let link = 'https://www.tintasautomotivas.com/'
    // Abre o menu de montadoras
    await page.goto(link);
    
  // Encontre todos os links 
  const linksSite = await page.$$eval('li a', links => links.map(link => link.href));
  // Filtrando apenas os links das montadoras
  const linksMontadoras = linksSite.slice(1, -2);

//   Loop pelas montadoras
  for (const linkMontadora of linksMontadoras) {
    await page.goto(linkMontadora);
    await page.waitForSelector('.btn.btn-primary.btn-lg');
    page.click('.btn.btn-primary.btn-lg'); 
    // Encontrar todos os carros da montadora
    const linksCarros = await page.$$eval('.lista-carros a', links => links.map(link => link.href));

    console.log('Links dos carros:', linksCarros);

//     // Loop pelos carros
//     for (const linkCarro of linksCarros) {
//       await page.goto(linkCarro);

//       // Extrair informações das cores dos carros
//       const cores = await page.$$eval('.info-cores .cor', cores => cores.map(cor => cor.textContent.trim()));

//       console.log('Montadora:', linkMontadora);
//       console.log('Carro:', linkCarro);
//       console.log('Cores:', cores);

//       // Voltar para a página da montadora para continuar para o próximo carro
//       await page.goBack();
//     }
    
 }
    
    await browser.close(); 
    
}
iniciarPupperteer();

// await PegarCores(page, link);
