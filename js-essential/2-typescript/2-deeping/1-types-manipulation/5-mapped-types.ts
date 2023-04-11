// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
type OnlyBoolsAndHorses = {
    [key: string]: boolean;
};

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
};