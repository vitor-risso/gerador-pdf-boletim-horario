require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, width:100, height:100});
  const page = await browser.newPage();
  await page.goto('https://sae.cotuca.unicamp.br/login');

  await page.type('[name="usuario"]', process.env.RA)
  await page.type('[name="senha"]', process.env.STUDENT_PASSWORD)
  
  await page.click('[name="commit"]')

  setTimeout(()=> {
    await page.goto(`https://sae.cotuca.unicamp.br/alunos/${Number(process.env.RA)}/boletim`)
    await page.click('[name="commit"]')

  },3000)
  
 // await page.goto('https://sae.cotuca.unicamp.br/alunos/18398/boletim?utf8=%E2%9C%93&Ano=2021&curso_aluno=37&commit=Buscar')

  //await page.screenshot({path: 'example.png'});

  //await browser.close();
})();
