const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted"
} 

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: "Hans",
    [BUTTON_TYPE_CLASSES.google]: "Franz",
    [BUTTON_TYPE_CLASSES.inverted]: "Kranz",
  }[buttonType]
)

const res = getButton("base");
console.log(res)