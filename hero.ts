interface Hero {
  name: string;
  ability: string;
  speak(sentence: string): string;
}

class Hero {
  // name: string;
  // ability: string;
  constructor(name: string, ability: string) {
    this.name = name;
    this.ability = ability;
  }

  speak(sentence: string) {
    return `${this.name} fala: ${sentence}`;
  }
}

const FirstHero = new Hero('Tai', 'Gostar de linux');

console.log(FirstHero.speak('Linux é legal'));
