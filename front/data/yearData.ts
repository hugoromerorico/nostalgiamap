export interface TrendItem {
    name: string;
    image: string;
  }
  
  export interface YearData {
    [year: number]: TrendItem[];
  }
  
  export const yearData: YearData = {
    1980: [
      { name: "Rubik's Cube", image: "/placeholder.svg?height=200&width=200" },
      { name: "Pac-Man", image: "/placeholder.svg?height=200&width=200" },
      { name: "Walkman", image: "/placeholder.svg?height=200&width=200" },
    ],
    1985: [
      { name: "Nintendo NES", image: "/placeholder.svg?height=200&width=200" },
      { name: "Transformers", image: "/placeholder.svg?height=200&width=200" },
      { name: "Back to the Future", image: "/placeholder.svg?height=200&width=200" },
    ],
    1990: [
      { name: "Game Boy", image: "/placeholder.svg?height=200&width=200" },
      { name: "Teenage Mutant Ninja Turtles", image: "/placeholder.svg?height=200&width=200" },
      { name: "Super Mario World", image: "/placeholder.svg?height=200&width=200" },
    ],
    1995: [
      { name: "PlayStation", image: "/placeholder.svg?height=200&width=200" },
      { name: "Pogs", image: "/placeholder.svg?height=200&width=200" },
      { name: "Tamagotchi", image: "/placeholder.svg?height=200&width=200" },
    ],
    2000: [
      { name: "Nokia 3310", image: "/placeholder.svg?height=200&width=200" },
      { name: "PlayStation 2", image: "/placeholder.svg?height=200&width=200" },
      { name: "Harry Potter books", image: "/placeholder.svg?height=200&width=200" },
    ],
    2005: [
      { name: "YouTube", image: "/placeholder.svg?height=200&width=200" },
      { name: "Xbox 360", image: "/placeholder.svg?height=200&width=200" },
      { name: "iPod Nano", image: "/placeholder.svg?height=200&width=200" },
    ],
    2010: [
      { name: "iPad", image: "/placeholder.svg?height=200&width=200" },
      { name: "Minecraft", image: "/placeholder.svg?height=200&width=200" },
      { name: "Instagram", image: "/placeholder.svg?height=200&width=200" },
    ],
    2015: [
      { name: "Fidget Spinners", image: "/placeholder.svg?height=200&width=200" },
      { name: "Pokémon Go", image: "/placeholder.svg?height=200&width=200" },
      { name: "Hoverboards", image: "/placeholder.svg?height=200&width=200" },
    ],
    2020: [
      { name: "TikTok", image: "/placeholder.svg?height=200&width=200" },
      { name: "Among Us", image: "/placeholder.svg?height=200&width=200" },
      { name: "Animal Crossing: New Horizons", image: "/placeholder.svg?height=200&width=200" },
    ],
  };
