export function generateGPTExplanation(input, activity) {
  return `This activity suits your interest in ${input.tripType.join(", ")} and works well for your selected pace.`;
} 