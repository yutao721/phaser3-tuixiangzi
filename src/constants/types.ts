
/** 格子 0 无 1 墙壁 2 地板 3 箱子 4 箱子终点 5 人 6 火箱子 */
export enum BLOCK {
  wall = 1,
  ground = 2,
  box = 3,
  end = 4,
  player = 5,
  badBox = 6
}

/** 方向 */
export enum DIR {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4
}


/** 键盘方向 */
export enum KEY_DIR {
  UP = "w",
  DOWN = "s",
  LEFT = "a",
  RIGHT = "d"
}
