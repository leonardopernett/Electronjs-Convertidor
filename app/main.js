const {BrowserWindow , app, Menu} = require('electron')
const url = require('url')
const path = require('path')


app.on('ready', ()=>{
  let main = new BrowserWindow(
      {
      width:600, 
      height:400,
      title:'Convertidor de Markdown a HTML', 
      webPreferences:{
          nodeIntegration:true
        },
       
     })

  main.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true  
}))

  main.on('closed', ()=> {
    app.quit()
  })

  const principal = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(principal)
})

const template = 
[
    {
      label:'file',
      submenu:[
          {
              label:'product',
              accelerator:'Ctrl + P',
              click(){

              }
          }
      ]
    }
]

if(process.env.NODE_ENV != 'production'){
    template.push({
        label:'dev',
        submenu:[{
            label:'show/hide dev tools',
            accelerator:'Ctrl + R ',
            click(item, focusedWindow){
                focusedWindow.toggleDevTools()
            },
           
            },
            {role:'reload'}
        ]
    })
}