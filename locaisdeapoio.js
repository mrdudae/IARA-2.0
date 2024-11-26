const API_KEY = 'YOUR_OPENCAGE_API_KEY'; // Substitua pelo seu chave da API OpenCage

// Dados de exemplo dos locais com latitude e longitude
const locations = [
    { name: "Centro de Apoio A", lat: -23.5505, lng: -46.6333, description: "Descrição do local A" },
    { name: "Centro de Apoio B", lat: -23.5596, lng: -46.6284, description: "Descrição do local B" },
    { name: "Centro de Apoio C", lat: -23.5612, lng: -46.6559, description: "Descrição do local C" }
];

// Função para calcular a distância entre duas coordenadas
function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// Função para exibir locais próximos
function showNearbyLocations(lat, lng) {
    const nearbyLocations = locations.map(location => {
        return { ...location, distance: getDistance(lat, lng, location.lat, location.lng) };
    }).sort((a, b) => a.distance - b.distance);

    const locationsContainer = document.getElementById('locations');
    locationsContainer.innerHTML = '';

    nearbyLocations.forEach(location => {
        const locationElement = document.createElement('div');
        locationElement.classList.add('location');
        locationElement.innerHTML = `
            <h2>${location.name}</h2>
            <p>${location.description}</p>
            <p><strong>Distância:</strong> ${location.distance.toFixed(2)} km</p>
        `;
        locationsContainer.appendChild(locationElement);
    });
}

// Função para obter a localização a partir do CEP
async function getLocationFromCEP(cep) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${API_KEY}`);
    const data = await response.json();
    if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { lat, lng };
    } else {
        throw new Error('CEP não encontrado');
    }
}

// Atualizar a localização ao clicar no botão
document.getElementById('submit-location').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value;
    try {
        const { lat, lng } = await getLocationFromCEP(cep);
        showNearbyLocations(lat, lng);
    } catch (error) {
        alert(error.message);
    }
});
