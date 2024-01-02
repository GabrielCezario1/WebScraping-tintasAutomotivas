
// Recebe a página como argumento
async function TirarPrint(page){
    await page.goto('https://br.linkedin.com/in/gabriel-souza-4443ba109?trk=public_profile_browsemap_profile-result-card_result-card_full-click');
    
    //Fechar pop-ups automaticos antes do print
    const seletor = '.artdeco-icon';
    await page.waitForSelector(seletor);   // Aguarda até que o seletor seja encontrado na página
    page.click(seletor);     // Clica no elemento correspondente ao seletor
    await page.waitForTimeout(2000); // Aguarda um segundo antes de executar outra ação até que a pagina seja carregada
    
   
    await page.screenshot({ path: 'exemple.png' });
}
module.exports = TirarPrint;