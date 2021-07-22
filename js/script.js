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
    //Emphasised text section (descriptive, not useful)
    flavorText: {
        //Text content
        quote: 'It took all its strength to contain the fire within.',
        //Text author
        author: 'None'
    },
    //Card ability/abilities
    abilities: [
        {
            //Mana cost of the ability & how to use it
            launchCost: ['R', 'T'],
            //Ability effects
            description: 'Sacrifice Bloodfire Colossus: Bloodfire Colossus deals 6 damage to each creature and each player.'
        }
    ],
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