
const url = 'https://restcountries.com/v2/all?fields=name,flag';
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    const response = JSON.parse(request.responseText);
    const countries = getRandomSubset(response, 50);
    const container = document.getElementById('image-container');
    countries.forEach(country => {
      const img = document.createElement('img');
      img.src = country.flag;
      container.appendChild(img);
    });
  }
};
function getRandomSubset(array, size) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
  return array.slice(0, size);
}