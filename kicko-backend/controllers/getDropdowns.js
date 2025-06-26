export function getDropdowns(req, res) {
  res.json({
    destinations: ["Kyoto, Japan", "Bangkok, Thailand", "Bali, Indonesia", "Paris, France"],
    tripTypes: ["Adventure", "Romantic", "Family", "Foodie", "Cultural", "Relaxation"],
    budgetLevels: ["Low", "Medium", "High"],
    groupTypes: ["Solo", "Couple", "Family", "Elderly", "Friends"],
    paceOptions: ["Easy", "Balanced", "Packed"],
    dietaryOptions: ["None", "Vegetarian", "Vegan", "Halal", "Kosher", "Gluten-Free"]
  });
} 