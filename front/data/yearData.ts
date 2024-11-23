export interface TrendItem {
  id: string;
  name: string;
  image: string;
}

export interface YearData {
  [year: number]: TrendItem[];
}

export const yearData: YearData = {
  1980: [
    { id: '1980-barrio-sesamo', name: "Barrio Sésamo", image: "/1980-barrio-sesamo.png?height=300&width=300" },
    { id: '1980-juego-oca', name: "Juego de la oca", image: "/1980-juego-oca.png?height=300&width=300" },
    { id: '1980-chupa-chups', name: "Chupa Chups", image: "/1980-chupa-chups.png?height=300&width=300" },
  ],
  1985: [
    { id: '1985-goonies', name: "Goonies", image: "/1985-goonies.png?height=300&width=300" },
    { id: '1985-spectrum-zx', name: "Spectrum ZX", image: "/1985-spectrum-zx.png?height=300&width=300" },
    { id: '1985-bollycao', name: "Bollycao", image: "/1985-bollycao.png?height=300&width=300" },
  ],
  1990: [
    { id: '1990-bola-dragon', name: "Bola de Dragón", image: "/1990-bola-dragon.png?height=300&width=300" },
    { id: '1990-game-boy', name: "Game Boy", image: "/1990-game-boy.png?height=300&width=300" },
    { id: '1990-chandal-adidas', name: "Chándal Adidas", image: "/1990-chandal-adidas.png?height=300&width=300" },
  ],
  1995: [
    { id: '1995-pokemon', name: "Pokémon", image: "/1995-pokemon.png?height=300&width=300" },
    { id: '1995-spice-girls', name: "Spice Girls", image: "/1995-spice-girls.png?height=300&width=300" },
    { id: '1995-tamagotchi', name: "Tamagotchi", image: "/1995-tamagotchi.png?height=300&width=300" },
  ],
  2000: [
    { id: '2000-gran-hermano', name: "Gran Hermano", image: "/2000-gran-hermano.png?height=300&width=300" },
    { id: '2000-playstation-2', name: "PlayStation 2", image: "/2000-playstation-2.png?height=300&width=300" },
    { id: '2000-harry-potter', name: "Harry Potter", image: "/2000-harry-potter.png?height=300&width=300" },
  ],
  2005: [
    { id: '2005-operacion-triunfo', name: "Operación Triunfo", image: "/2005-operacion-triunfo.png?height=300&width=300" },
    { id: '2005-tuenti', name: "Tuenti", image: "/2005-tuenti.png?height=300&width=300" },
    { id: '2005-rebelde-way', name: "Rebelde Way", image: "/2005-rebelde-way.png?height=300&width=300" },
  ],
  2010: [
    { id: '2010-whatsapp', name: "WhatsApp", image: "/2010-whatsapp.png?height=300&width=300" },
    { id: '2010-la-que-se-avecina', name: "La que se avecina", image: "/2010-la-que-se-avecina.png?height=300&width=300" },
    { id: '2010-angry-birds', name: "Angry Birds", image: "/2010-angry-birds.png?height=300&width=300" },
  ],
  2015: [
    { id: '2015-periscope', name: "Periscope", image: "/2015-periscope.png?height=300&width=300" },
    { id: '2015-pokemon-go', name: "Pokémon Go", image: "/2015-pokemon-go.png?height=300&width=300" },
    { id: '2015-elite', name: "Élite", image: "/2015-elite.png?height=300&width=300" },
  ],
  2020: [
    { id: '2020-tiktok', name: "TikTok", image: "/2020-tiktok.png?height=300&width=300" },
    { id: '2020-la-casa-de-papel', name: "La Casa de Papel", image: "/2020-la-casa-de-papel.png?height=300&width=300" },
    { id: '2020-among-us', name: "Among Us", image: "/2020-among-us.png?height=300&width=300" },
  ],
};
