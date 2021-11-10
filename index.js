const puppeteer = require('puppeteer');

(async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({width:1000,height:800});

    const url = "https://twitter.com/Ccanochu";

    await page.goto(url);
    await page.waitForTimeout(5000);
    
    try{
        await page.pdf({
            path:'pdf_page_lk.pdf',
            format:'A4'
        });
    }
    catch(e){
        console.log(e);
    }

    await browser.close();
})()