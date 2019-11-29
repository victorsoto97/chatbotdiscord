const {Client,RichEmbed}=require('discord.js');
const client =  new Discord.Client();


client.on('ready',()=>{
console.log(`mi bot ya funcionaXD:${client.user.tag}`);
  if (client.user.presence.status === 'dnd'){
      console.log('est muerto por un momento',client.user.presence.status);
  }
  else {
      console.log('el bot esta vivo');
  }
  const testChannel=client.channels.find(channel=>channel.name === 'canal uamex');
  console.log('Satanael is here');
});


client.on('message',async message =>{
    console.log(message);
     if (message.content === 'ping'){
         message.reply('pong');
     }
     if (message.content === 'hola'){
         message.channel.send(`hola ${message.author} saludos chavos`);
     }
     if (message.content.includes('jotitos')){
         message.channel.send(`no mms no puedes decir esa madre, pide perdon${message.author}`);
     }
     if (message.content === 'cherrybit'){
         message.channel.send('http://cherrybit.com.mx');
         message.channel.send('http://labs.dipia.io/');
     }
     if (message.content === '!pretry'){
         const embed = new RichEmbed()// codigo para q no mns esten bonitos 
         .setTitle('prety message')
         .setColor('#f46611')
         .setAuthor ('Cherry', 'https://www.google.com/search?q=imagenes&rlz=1C1CHBF_esMX857MX857&tbm=isch&source=iu&ictx=1&fir=OYcaR7F2xShWnM%253A%252CoBYNPiKCxvhIUM%252C_&vet=1&usg=AI4_-kTcUnuotHp-lWAsYsh_WgtSTHYQnA&sa=X&ved=2ahUKEwiT56Pj-Y_mAhUSLa0KHTbkDwkQ9QEwAXoECAgQHg#imgrc=OYcaR7F2xShWnM:')
        message.channel.send(embed);
     };
     if (message.content==='!clear'){
         const fetched = await message.channel.fetchMessages({limit:100});
         message.channel.bulkDelete(fetched);
         console.log('message eliminet');
     };
});

client.login('NjUwMDA2MDYyMjY2NzEyMDY0.XeFDmg.KygzWJUoEQWUrj6Y-60Vt_iJkI8');

