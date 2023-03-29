import { Application, Sprite } from 'pixijs';
import { PixiContainer } from './PixiContainer.js';
import { PixiSprite } from './PixiSprite.js';
import pixiJsLogo from '../images/pixijs-logo.svg';
import config from '../../config.json' assert { type: 'json' };

// Create the application helper and add its render target to the page
let app = new Application(config.Application);
document.getElementById('app').appendChild(app.view);

// Create the sprite and add it to the stage
let sprite = Sprite.from(pixiJsLogo);
app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
