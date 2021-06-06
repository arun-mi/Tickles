const initialValue = {
  sprite: 1,
};

const SpriteReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FirstSprite":
      return {
        ...state,
        sprite: 1,
      };
    case "SecondSprite":
      return {
        ...state,
        sprite: 2,
      };
    default:
      return state;
  }
};
export default SpriteReducer;
