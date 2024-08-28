const breeds = {
    Cachorro: ["Labrador", "Poodle", "Bulldog", "Beagle", "Vira-Lata"],
    Gato: ["Persa", "Siamês", "Maine Coon", "Sphynx", "Vira-Lata"],
    Pássaro: ["Canário", "Papagaio", "Arara", "Periquito"],
    Peixe: ["Beta", "Neon Tetra", "Oscar", "Ciclídeo"]
};

function updateBreeds() {
    const species = document.getElementById('species').value;
    const breedSelect = document.getElementById('breed');
    breedSelect.innerHTML = '<option value="">Selecione uma raça</option>'; // Reset breeds options
    if (species && breeds[species]) {
        breeds[species].forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            breedSelect.appendChild(option);
        });
    }
}

function registerAnimal() {
    const animalName = document.getElementById('animalName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const ageValue = document.getElementById('ageValue').value;
    const ageUnit = document.getElementById('ageUnit').value;
    const owner = document.getElementById('owner').value;

    if (animalName && species && breed && ageValue && owner) {
        const animalList = document.getElementById('animalList');
        const animalItem = document.createElement('div');
        animalItem.className = 'animal-item';
        animalItem.innerHTML = `
            <strong>Nome:</strong> ${animalName}<br>
            <strong>Espécie:</strong> ${species}<br>
            <strong>Raça:</strong> ${breed}<br>
            <strong>Idade:</strong> ${ageValue} ${ageUnit}<br>
            <strong>Dono:</strong> ${owner}
        `;
        animalList.appendChild(animalItem);
        
        document.getElementById('animalName').value = '';
        document.getElementById('species').selectedIndex = 0;
        updateBreeds(); 
        document.getElementById('ageValue').value = '';
        document.getElementById('ageUnit').selectedIndex = 0;
        document.getElementById('owner').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
