
async function PegarCores(page, link){
    
        await page.goto(link);
        const textContents = await page.evaluate(() => {
            const elements = document.querySelectorAll('.btn.btn-default.btn-lg');
            const texts = [];
          
            elements.forEach(element => {
              texts.push(element.textContent.trim());
            });
            return texts;
          });
    
          console.log('Textos obtidos:', textContents);
        
}
      module.exports = PegarCores;