import { getSampleData, getWeatherForDate } from '../utils/sampleData.js';
import { generateGPTExplanation } from '../utils/aiLogic.js';

export function generateItinerary(req, res) {
  const input = req.body;
  const { destination, startDate, endDate, tripType, pace, budget, groupType, dietaryRestrictions, mustSee = [], avoid = [] } = input;

  // Calculate days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1);

  // Dummy data for city, activities, restaurants
  const { cities, activities, restaurants } = getSampleData();
  const city = cities.find(c => c.name === destination) || cities[0];

  // Generate itinerary per day
  let itinerary = [];
  for (let i = 0; i < days; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const weather = getWeatherForDate(city, date);
    // Pick 3-6 activities per day
    const dayActivities = activities
      .filter(a => a.city === city.name && (!avoid.some(av => a.tags.includes(av))))
      .slice(0, 3 + Math.floor(Math.random() * 4));
    // Add must-see if not already included
    mustSee.forEach(ms => {
      if (!dayActivities.some(a => a.title.includes(ms))) {
        const msAct = activities.find(a => a.title.includes(ms));
        if (msAct) dayActivities.unshift(msAct);
      }
    });
    // Add explanations and actions
    const activitiesWithMeta = dayActivities.map((a, idx) => ({
      time: `${10 + idx * 2}:00 AM`,
      title: a.title,
      reason: generateGPTExplanation(input, a),
      action: a.action,
    }));
    itinerary.push({
      day: `Day ${i + 1}`,
      summary: `Sample day in ${city.name}`,
      activities: activitiesWithMeta,
      weather,
      mobilityNote: 'Moderate walking, mostly flat terrain',
    });
  }

  res.json({
    tripSummary: {
      destination: city.name,
      days,
      weather: getWeatherForDate(city, start),
      style: tripType.join(' + '),
      pace,
    },
    itinerary,
  });
} 