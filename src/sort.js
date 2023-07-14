export default function sorting(array) {
  return array.sort((prev, next) => next.health - prev.health);
}