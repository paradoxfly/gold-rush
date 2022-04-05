import Player from '../Classes/Player' 
import Lava from '../Classes/Lava'
import Gold from '../Classes/Gold'
import { checkOverlap, overlap } from './surfaceFunctions'
import { incrementTimeByOne, resetTime } from '../redux/utils/time'

// const options = {
//   player: { x: '', y: '' },
//   lava: {x: '', y: '', distance: ''}, 
//   gold: [ { x: '', y: '' }, ]
// }


export default function game(dispatch, stage, options){
  return new Promise((resolve, reject) => {

    console.log('got here')
    resetTime(dispatch)
    let time = 0

    let timeIntervalID = null
    let checkOverlapIntervalID = null
    let gameInterval = null
    let goldAcquired = 0

    //Initialize stage and objects.
    stage.drawStage()
    const { player, lava, gold } = options
    const _player = new Player(dispatch, player.x, player.y)
    const goldArray = []
    for(let i of gold){
      goldArray.push(new Gold(dispatch, i.x, i.y) )
    }
    const lavaArray = []
    for(let i of lava){
      lavaArray.push(new Lava(dispatch, i.x, i.y, i.distance) )
    } 

    //Allows stage to render before starting game
    setTimeout(() => {
      playGame()
    }, 500);

    //Starts time count
    const startCount = () => {
      timeIntervalID = setInterval(() => {
        incrementTimeByOne(dispatch)
        time++;
      }, 1000);
    }

    //clears intervals
    const clearIntervals = () => {
      clearInterval(timeIntervalID)
      clearInterval(checkOverlapIntervalID)
      clearInterval(_player.gravID)
      for(let lava of lavaArray){
        clearInterval(lava.gravID)
      }
      clearInterval(gameInterval)
    }

    //clears stage of objects
    const clearStage = () => {
      _player.clear()
      for(let gold of goldArray){
        gold.clear()
      }
      for(let lava of lavaArray){
        lava.clear()
      }
    }

    //draws objects into stage and initializes their gravity
    const drawObjects = () => {
      _player.initialize(stage.surface)
      for(let lava of lavaArray){
        lava.initialize(stage.surface)
      }
      for(let gold of goldArray){
        gold.initialize()
      }
    }

    //checks for gold acquired by player
    const goldTouch = () => {
      for(let gold of goldArray){
        if(overlap(_player.surface, gold.surface)){
          gold.clear()
          goldAcquired++
        }
      }
    }

    //checks if player touches lava
    const lavaBurn = () => {
      let lavaSurfaces = []
      for(let lava of lavaArray){
        lavaSurfaces.push(lava.surface)
      }
      if(checkOverlap(_player.surface, stage.lava, ...lavaSurfaces)){
        window.removeEventListener('keydown', _player.controller)
        clearIntervals()
        _player.blink()
        setTimeout(() => {
          playGame()
        }, 2000);
      }
    }

    //checks if player has acquired all available gold
    const checkGoldAcquired = () => {
      if(goldAcquired === goldArray.length){
        console.log('you win')
        console.log(`It took you ${time} seconds`)
        clearIntervals()
        window.removeEventListener('keydown', _player.controller)
        resolve(time)
      }
    }

    const playGame = () => {    //Designed to be recursive
      
      goldAcquired = 0
      //clear stage of previous objects if any
      clearStage()

      //draw objects into stage and initialize their gravity intervals
      drawObjects()


      window.addEventListener('keydown', _player.controller)

      //start time count
      startCount();

      gameInterval = setInterval(() => {
        goldTouch()
        lavaBurn()
        checkGoldAcquired()
      }, 10);
    }
  })
  
}