import Phaser from 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import ModalScene from './scenes/ModalScene'

const DEFAULT_WIDTH = 750
const DEFAULT_HEIGHT = 1624
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  scale: {
    parent: 'app',
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [PreloadScene, MainScene, ModalScene],
}

export default new Phaser.Game(config)
