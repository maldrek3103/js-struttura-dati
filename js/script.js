//Create an array of objects for the card's properties
const fullDeck = [{
    //"Index" of the card
    id: 1,
    //Card name
    name: 'Bloodfire Colossus',
    //Required mana to invoke the creature divided by mana type
    manaCost: ['6', 'R', 'R'],
    //Total cost of mana required "CMC"
    convertedManaCost: 8,
    //Illustrator infoes
    illustration: {
        author: {
            //"Index" of the author
            id: 1,
            //Name of the author
            fullName: 'Greg Staples'
        },
        //Image url
        source: '..img/pic.jpg'
    },
    //Card type
    type: 'Creature',
    //Card sub type
    subType: 'Giant',
    //Card edition
    expansion: {
        //Expansion number
        reprintId: 9,
        //Expansion name
        name: 'Three card expansion',
        //Rarirty of the card
        rarity: 'Rare',
        //"Index" of the card inside the edition
        collectionNr: 177,
        //Total cards in the edition
        totalCard: 350
    },
    //Card ability/abilities
    abilities: [
        {
            //Mana cost of the ability & how to use it
            manaCost: ['R', 'T'],
            //Ability effects
            description: 'Sacrifice Bloodfire Colossus: Bloodfire Colossus deals 6 damage to each creature and each player.'
        }
    ],
    //Emphasised text section (descriptive, not useful)
    flavorText: {
        //Text content
        quote: 'It took all its strength to contain the fire within.',
        //Text author
        author: 'None'
    },
    //Card strength
    strength: 5,
    //Card constitution
    constitution: 5,
    //Card border color
    borderColor: '#000',
    //Card background color
    background:
    {
        color: 'Red',
        pattern: '..img/background_pattern.jpg'
    }
},
{
    id: 2,
    name: 'Fist of the Demigod',
    manaCost: ['1', 'B/', 'R'],
    convertedManaCost: 2,
    illustration: {
        author: {
            id: 2,
            fullName: 'Dan Scott'
        },
        source: '..img/pic.jpg'
    },
    type: 'Enchantment',
    subType: 'Aura',
    expansion: {
        reprintId: 7,
        name: 'Wing',
        rarity: 'Common',
        collectionNr: 183,
        totalCard: 311
    },
    abilities: [
        {
            manaCost: [],
            description: 'Enchant creature. As long as enchanted creature is black, it gets +1/+1 and has wither. (It deals damage to creature in the front of -1/-1 counters). As long as enchanted creature is red it gets +1/+1 and has first strike.'
        }
    ],
    flavorText: {
        quote: '',
        author: ''
    },
    strength: '',
    constitution: '',
    borderColor: '#000',
    background:
    {
        color: 'Red/Black',
        pattern: '..img/background_pattern.jpg'
    }
},
{
    id: 3,
    name: 'Hogaak, Arisen Necropolis',
    manaCost: ['5', 'B/G', 'B/G'],
    convertedManaCost: 7,
    illustration: {
        author: {
            id: 3,
            fullName: 'Vincent Proce'
        },
        source: '..img/pic.jpg'
    },
    type: 'Legendary Creature',
    subType: 'Avatar',
    expansion: {
        reprintId: 6,
        name: 'Bat',
        rarity: 'Rare',
        collectionNr: 202,
        totalCard: 254
    },
    abilities: [
        {
            manaCost: [],
            description: "You can't spend mana to cast this spell. Convoke, delve (Each creature you tap while casting this spell pays for 1 or one more mana of that creature's color. Each card you exile from your graveyard pays for 1. You may cast Hogaak, Arisen Necropolis from your graveyard. Trample."
        }
    ],
    flavorText: {
        quote: '',
        author: ''
    },
    strength: 8,
    constitution: 8,
    borderColor: '#000',
    background:
    {
        color: 'Black/Green',
        pattern: '..img/background_pattern.jpg'
    }
},
{
    id: 4,
    name: 'Presence of Gond',
    manaCost: ['2', 'G'],
    convertedManaCost: 3,
    illustration: {
        author: {
            id: 4,
            fullName: 'Brandon Kitkouski'
        },
        source: '..img/pic.jpg'
    },
    type: 'Enchantment',
    subType: 'Aura',
    expansion: {
        reprintId: 6,
        name: 'Bat',
        rarity: 'Common',
        collectionNr: 125,
        totalCard: 311
    },
    abilities: [
        {
            manaCost: [],
            description: 'Enchant creature. Enchanted creature has "Tap": Put a 1/1 green Elf Warrior creature token into play.'
        }
    ],
    flavorText: {
        quote: 'Here lies Gond, hero of Safehold Taldwen. May he ever guide our quest.',
        author: 'None'
    },
    strength: '',
    constitution: '',
    borderColor: '#000',
    background:
    {
        color: 'Green',
        pattern: '..img/background_pattern.jpg'
    }
}
]

//Ability default (not all the cards have abilities)
let abilitiesContent = "<em>No abilities</em>";

//Condition that verifies if there is/are ability/abilities
for (let j = 0; j < fullDeck.length; j++) {
    if (fullDeck[j].abilities.length) {
        abilitiesContent = '<ul>';
        for (let i = 0; i < fullDeck[i].abilities.length; i++) {
            const currentAbility = fullDeck[i].abilities[i];
            abilitiesContent += `<li><strong>Mana cost:</strong> ${currentAbility.manaCost.join(', ')}</li>`;
            abilitiesContent += `<li><strong>Description:</strong> ${currentAbility.description}</li>`;
        }
        abilitiesContent += '</ul>';
    }
}

const createCardTemplate = (card) => {
    for (let i = 0; i < fullDeck.length; i++) {
        `<ul class="card"> 
        <li><strong>Card ID:</strong> ${card.id}</li>
        <li><strong>Name:</strong> ${card.name}</li>
        <li><strong>Mana cost:</strong> ${card.manaCost.join(', ')}</li>
        <li><strong>CMC (Converted Mana Cost):</strong> ${card.convertedManaCost}</li>
        <li><strong>Illustration:</strong> 
            <ul>
                <li><strong>Author:</strong> ${card.illustration.author.fullName} (ID: ${card.illustration.author.id})</li>
                <li><strong>Illustration link:</strong> ${card.illustration.source}</li>
            </ul>
        </li>
        <li><strong>Card type:</strong> ${card.type} ${card.subType}</li >
        <li><strong>Expansion:</strong> 
        <ul>
        <li><strong>Reprint:</strong> ${card.expansion.reprintId}</li>
        <li><strong>Name:</strong> ${card.expansion.name}</li>
        <li><strong>Rarity:</strong> ${card.expansion.rarity}</li>
        <li><strong>Collection number:</strong> ${card.expansion.collectionNr}/${card.expansion.totalCard}</li>
        </ul>
        </li>
        <li><strong>Ability/Abilities:</strong> ${abilitiesContent}</li>
        <li><strong>Flavor text:</strong>
        <ul>
        <li><strong>Quote:</strong> <em>${card.flavorText.quote}</em></li>
        <li><strong>Author:</strong> <em>${card.flavorText.author}</em></li>
        </ul>
        </li>
        <li><strong>Constitution:</strong> ${card.constitution}</li>
        <li><strong>Strength:</strong> ${card.strength}</li>
        <li><strong>Border color:</strong> ${card.borderColor}</li>
        <li><strong>Background:</strong>
        <ul>
        <li><strong>Color:</strong> ${card.background.color}</li>
        <li><strong>Pattern:</strong> ${card.background.pattern}</li>
        </ul>
        </li>
     </ul >`;
    }
}
// Print on page
const cardSection = document.getElementById('cards');


//Condition that verifies if there is a card sub type
const subType = fullDeck.subType ? ` - ${fullDeck.subType}` : '';

const renderDeck = (deck, targetElement) => {
    let deckTemplate = '';
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        const currentCardTemplate = createCardTemplate(currentCard);
        deckTemplate += currentCardTemplate;
    }
    targetElement.innerHTML = deckTemplate;
};

//Prints card template on page

renderDeck(fullDeck, cardSection);

//Filters
const inputField = document.getElementById('search');
const selectField = document.getElementById('filter');
const button = document.getElementById('button');

selectField.addEventListener('change', () => {
    const currentValue = selectField.value;

    if (currentValue !== 'all') {
        inputField.classList.remove('hidden');
    } else {
        inputField.classList.add('hidden');
    }
});

button.addEventListener('click', () => {
    const inputValue = inputField.value;
    const selectValue = selectField.value;

    if (selectValue === 'all') {
        renderDeck(fullDeck, cardSection);
        return;
    }

    const filteredDeck = [];
    for (let i = 0; i < fullDeck.length; i++) {
        const currentCard = fullDeck[i];
        switch (selectValue) {
            case 'id':
            case 'constitution':
            case 'strength':
            case 'convertedManaCost':
                if (currentCard[selectValue] == inputValue) {
                    filteredDeck.push(currentCard);
                }
                break;
            default:
                if (currentCard[selectValue].includes(inputValue)) {
                    filteredDeck.push(currentCard);
                }
        }
    }
});
cardSection.innerHTML = renderDeck(fullDeck, cardSection);;