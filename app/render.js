const markdown =  document.querySelector('#markdown');
const html     =  document.querySelector('#html')
const marked =require('marked')


const renderToMarkdown = (markdown) => {
    html.innerHTML =marked(markdown, {sanitize:true}) 
};


markdown.addEventListener('keyup', (e)=>{
    const currentContent = e.target.value;
    renderToMarkdown(currentContent);
})