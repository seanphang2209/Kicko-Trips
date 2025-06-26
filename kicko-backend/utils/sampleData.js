export function getSampleData() {
  return {
    cities: [
      {
        name: "Kyoto, Japan",
        pois: ["Fushimi Inari", "Kiyomizu-dera", "Gion"],
        weather: ["22°C and sunny", "18°C and cloudy", "20°C and rainy"],
        notes: "Rich in culture, shrines, and food."
      },
      {
        name: "Bangkok, Thailand",
        pois: ["Grand Palace", "Chatuchak Market", "Wat Pho"],
        weather: ["30°C and humid", "28°C and rainy", "32°C and sunny"],
        notes: "Vibrant city with street food and temples."
      }
    ],
    activities: [
      {
        city: "Kyoto, Japan",
        title: "Fushimi Inari Shrine",
        tags: ["Cultural", "MustSee"],
        avgTime: 2,
        cost: "Medium",
        indoor: false,
        action: { label: "Book walking tour on Klook", url: "https://klook.com/kyoto-fushimi" }
      },
      {
        city: "Kyoto, Japan",
        title: "Vegetarian ramen lunch",
        tags: ["Foodie", "Vegetarian"],
        avgTime: 1,
        cost: "Low",
        indoor: true,
        action: { label: "Reserve via Tabelog", url: "https://tabelog.com/kyoto-ramen" }
      },
      {
        city: "Kyoto, Japan",
        title: "Tea Ceremony Experience",
        tags: ["Cultural", "MustSee"],
        avgTime: 1,
        cost: "Medium",
        indoor: true,
        action: { label: "Book on Klook", url: "https://klook.com/kyoto-tea" }
      },
      {
        city: "Bangkok, Thailand",
        title: "Grand Palace Tour",
        tags: ["Cultural", "MustSee"],
        avgTime: 2,
        cost: "High",
        indoor: false,
        action: { label: "Book on Klook", url: "https://klook.com/bangkok-grand-palace" }
      }
    ],
    restaurants: [
      {
        city: "Kyoto, Japan",
        name: "Veggie Delight",
        tags: ["Vegetarian"],
        cost: "Medium",
        dietary: ["Vegetarian"],
        action: { label: "Reserve via Tabelog", url: "https://tabelog.com/kyoto-veggie" }
      }
    ]
  };
}

export function getWeatherForDate(city, date) {
  // Simulate weather by picking a random weather from city's weather array
  if (!city.weather) return "22°C and sunny";
  return city.weather[date.getDate() % city.weather.length];
} 