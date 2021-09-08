mp.events.add("render", () => {
	if (!loggedin || localplayer.getVariable('IS_ADMIN') !== true) return; //Проверка на админа 
	else mp.events.callRemote('render');
    var player = mp.players.local;
    
          const pos = player.position;
          const heading = player.getHeading();

          mp.game.graphics.drawText(`x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)}, z: ${pos.z.toFixed(2)}, h: ${heading.toFixed(2)}`, [0.55, 0.965],  { //надпись самих кординатов
              font: 0, // Шрифт
              color: [255, 255, 255, 230], // Цвет RGBA
              scale: [0.4, 0.4], // Размер
              outline: true
          });   
});