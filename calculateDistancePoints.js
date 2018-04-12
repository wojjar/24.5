const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if (typeof distance !== 'number' || typeof hillSize !== 'string' ||typeof kPoint !== 'number')
      return 'Wrong type of data';
  
    const n = distance - kPoint;
  
    if (hillSize == 'normal')
      return 60 + n * 2;    // 2.0 points per m
    else if (hillSize == 'big')
      return 60 + n * 1.8;  // 1.8 points per m
    else if (hillSize == 'giant')
      return 120 + n * 1.2; // 1.2 points per m
    else
      return 'Wrong hillSize';
  }
  
  module.exports = calculateDistancePoints;