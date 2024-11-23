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
    { id: '1980-barrio-sesamo', name: "Barrio Sésamo", image: "/placeholder.svg?height=300&width=300" },
    { id: '1980-juego-oca', name: "Juego de la oca", image: "/placeholder.svg?height=300&width=300" },
    { id: '1980-chupa-chups', name: "Chupa Chups", image: "/placeholder.svg?height=300&width=300" },
  ],
  1985: [
    { id: '1985-goonies', name: "Goonies", image: "/placeholder.svg?height=300&width=300" },
    { id: '1985-spectrum-zx', name: "Spectrum ZX", image: "/placeholder.svg?height=300&width=300" },
    { id: '1985-bollycao', name: "Bollycao", image: "/placeholder.svg?height=300&width=300" },
  ],
  1990: [
    { id: '1990-bola-dragon', name: "Bola de Dragón", image: "/placeholder.svg?height=300&width=300" },
    { id: '1990-game-boy', name: "Game Boy", image: "/placeholder.svg?height=300&width=300" },
    { id: '1990-chandal-adidas', name: "Chándal Adidas", image: "/placeholder.svg?height=300&width=300" },
  ],
  1995: [
    { id: '1995-pokemon', name: "Pokémon", image: "/placeholder.svg?height=300&width=300" },
    { id: '1995-spice-girls', name: "Spice Girls", image: "/placeholder.svg?height=300&width=300" },
    { id: '1995-tamagotchi', name: "Tamagotchi", image: "/placeholder.svg?height=300&width=300" },
  ],
  2000: [
    { id: '2000-gran-hermano', name: "Gran Hermano", image: "/placeholder.svg?height=300&width=300" },
    { id: '2000-playstation-2', name: "PlayStation 2", image: "/placeholder.svg?height=300&width=300" },
    { id: '2000-harry-potter', name: "Harry Potter", image: "/placeholder.svg?height=300&width=300" },
  ],
  2005: [
    { id: '2005-operacion-triunfo', name: "Operación Triunfo", image: "/placeholder.svg?height=300&width=300" },
    { id: '2005-tuenti', name: "Tuenti", image: "/placeholder.svg?height=300&width=300" },
    { id: '2005-rebelde-way', name: "Rebelde Way", image: "/placeholder.svg?height=300&width=300" },
  ],
  2010: [
    { id: '2010-whatsapp', name: "WhatsApp", image: "/placeholder.svg?height=300&width=300" },
    { id: '2010-la-que-se-avecina', name: "La que se avecina", image: "/placeholder.svg?height=300&width=300" },
    { id: '2010-angry-birds', name: "Angry Birds", image: "/placeholder.svg?height=300&width=300" },
  ],
  2015: [
    { id: '2015-periscope', name: "Periscope", image: "/placeholder.svg?height=300&width=300" },
    { id: '2015-pokemon-go', name: "Pokémon Go", image: "/placeholder.svg?height=300&width=300" },
    { id: '2015-elite', name: "Élite", image: "/placeholder.svg?height=300&width=300" },
  ],
  2020: [
    { id: '2020-tiktok', name: "TikTok", image: "/placeholder.svg?height=300&width=300" },
    { id: '2020-la-casa-de-papel', name: "La Casa de Papel", image: "/placeholder.svg?height=300&width=300" },
    { id: '2020-among-us', name: "Among Us", image: "/placeholder.svg?height=300&width=300" },
  ],
};
