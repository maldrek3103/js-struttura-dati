//Create an array of objects for the card's properties
const card = {
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
};


// Print on page
const cardSection = document.getElementById('cards');

//Condition that verifies if there is a card sub type
const subType = card.subType ? ` - ${card.subType}` : '';

//Ability default (not all the cards have abilities)
let abilitiesContent = "<em>No abilities</em>";

//Condition that verifies if there is/are ability/abilities
if (card.abilities.length) {
    abilitiesContent = '<ul>';
    for (let i = 0; i < card.abilities.length; i++) {
        const currentAbility = card.abilities[i];
        abilitiesContent += `<li><strong>Mana cost:</strong> ${currentAbility.manaCost.join(', ')}</li>`;
        abilitiesContent += `<li><strong>Description:</strong> ${currentAbility.description}</li>`;
    }
    abilitiesContent += '</ul>';
}

//General card structure 
let cardTemplate = `
<ul class="card"> 
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
    <li><strong>Card type:</strong> ${card.type} ${subType}</li >
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
 </ul > `;

//Prints card template on page
cardSection.innerHTML = cardTemplate;