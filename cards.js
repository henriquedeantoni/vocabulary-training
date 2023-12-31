const cardList = [
    { id: '0001', name: 'first_image', level: 'a1', src: './assets/0001_first_image_a1.png' },
    { id: '0002', name: 'Bread', level: 'a1', src: './assets/0002_bread_a1.jpg' },
    { id: '0003', name: 'Chain', level: 'a1', src: './assets/0003_chain_a1.jpg' },
    { id: '0004', name: 'Chairs', level: 'a1', src: './assets/0004_chairs_a1.jpg' },
    { id: '0005', name: 'Elephant', level: 'a1', src: './assets/0005_elephant_a1.jpg' },
    { id: '0006', name: 'Eye', level: 'a1', src: './assets/0006_eye_a1.jpg' },
    { id: '0007', name: 'Fish', level: 'a1', src: './assets/0007_fish_a1.jpg' },
    { id: '0008', name: 'Flip flops', level: 'a1', src: './assets/0008_flip_flops_a1.jpg' },
    { id: '0009', name: 'Helicopter', level: 'a1', src: './assets/0009_helicopter_a1.jpg' },
    { id: '0010', name: 'House', level: 'a1', src: './assets/0010_house_a1.jpg' },
    { id: '0011', name: 'Lion', level: 'a1', src: './assets/0011_lion_a1.jpg' },
    { id: '0012', name: 'Sea', level: 'a1', src: './assets/0012_sea_a1.jpg' },
    { id: '0013', name: 'Sign', level: 'a1', src: './assets/0013_sign_a1.jpg' },
    { id: '0014', name: 'Table', level: 'a1', src: './assets/0014_table_a1.jpg' },
    { id: '0015', name: 'Towels', level: 'a1', src: './assets/0015_towels_a1.jpg' },
    { id: '0016', name: 'Candies', level: 'a1', src: './assets/0016_candies_a1.jpg' },
    { id: '0017', name: 'Eyeglasses', level: 'a1', src: './assets/0017_eyeglasses_a1.jpg'},
    { id: '0018', name: 'Eraser', level: 'a1', src: './assets/0018_eraser_a1.jpg' },
    { id: '0019', name: 'Bridge', level: 'a1', src: './assets/0019_bridge_a1.jpg' },
    { id: '0020', name: 'Starfish', level: 'a1', src: './assets/0020_starfish_a1.jpg' },
    { id: '0021', name: 'Angel', level: 'a1', src: './assets/0021_angel_a1.jpg' }, 
    { id: '0022', name: 'Ant', level: 'a1', src: './assets/0022_ant_a1.jpg' },
    { id: '0023', name: 'Baloon', level: 'a1', src: './assets/0023_baloon_a1.jpg' },
    { id: '0024', name: 'Bear', level: 'a1', src: './assets/0024_bear_a1.jpg' },
    { id: '0025', name: 'Motorcycle', level: 'a1', src: './assets/0025_motorcycle_a1.jpg' },              
    { id: '0026', name: 'Wall', level: 'a1', src: './assets/0026_wall_a1.jpg' },
    { id: '0027', name: 'Bubbles', level: 'a1', src: './assets/0027_bubbles_a1.jpg' },
    { id: '0028', name: 'Cat', level: 'a1', src: './assets/0028_cat_a1.JPG' },
    { id: '0029', name: 'Desert', level: 'a1', src: './assets/0029_desert_a1.jpg' },
    { id: '0030', name: 'Eggs', level: 'a1', src: './assets/0030_eggs_a1.jpg' },          
]

const nameList = [
    { name: "Bicycle", namePt: "Bicicleta" },
    { name: "Boat", namePt: "Barco" },
    { name: "Book", namePt: "Livro" },
    { name: "Butterfly", namePt: "Borboleta" },
    { name: "Camera", namePt: "Câmera" },
    { name: "Car", namePt: "Carro" },
    { name: "Cat", namePt: "Gato" },
    { name: "Chair", namePt: "Cadeira" },
    { name: "Cloud", namePt: "Nuven" },
    { name: "Coffee", namePt: "Café" },
    { name: "Dog", namePt: "Cachorro" },
    { name: "Elephant", namePt: "Elefante" },
    { name: "Feather", namePt: "Pena" },
    { name: "Fireworks", namePt: "Fogos" },
    { name: "Fish", namePt: "Peixe" },
    { name: "Flower", namePt: "Flor" },
    { name: "Freedom", namePt: "Liberdade" },
    { name: "Guitar", namePt: "Guitarra" },
    { name: "Harmony", namePt: "Harmonia" },
    { name: "Hat", namePt: "Chapéu" },
    { name: "House", namePt: "Casa" },
    { name: "Jellyfish", namePt: "Medusa" },
    { name: "Key", namePt: "Chave" },
    { name: "Laptop", namePt: "Notebook" },
    { name: "Lion", namePt: "Leão" },
    { name: "Love", namePt: "Amor" },
    { name: "Moon", namePt: "Lua" },
    { name: "Moonlight", namePt: "Crepusculo" },
    { name: "Mountain", namePt: "Montanha" },
    { name: "Music", namePt: "Musica" },
    { name: "Ocean", namePt: "Oceano" },
    { name: "Piano", namePt: "Piano" },
    { name: "Pizza", namePt: "Pizza" },
    { name: "Rainbow", namePt: "Arco-Iris" },
    { name: "Smile", namePt: "Sorriso" },
    { name: "Star", namePt: "Estrela" },
    { name: "Sun", namePt: "Sol" },
    { name: "Table", namePt: "Mesa" },
    { name: "Time", namePt: "Tempo" },
    { name: "Tree", namePt: "Árvore" },
    { name: "Whistle", namePt: "Assobio" },
    { name: "Beauty", namePt: "Beleza" },
    { name: "Wheel", namePt: "Roda" },
    { name: "Roof", namePt: "Telhado" },
    { name: "Steel", namePt: "Aço" },
    { name: "Wind", namePt: "Vento" },
    { name: "Cost", namePt: "Custo" },
    { name: "Get", namePt: "Pegar" },
    { name: "Honey", namePt: "Mel" },
    { name: "Hour", namePt: "Hora" },
    { name: "Lips", namePt: "Lábios" },
    { name: "Feet", namePt: "Pés" },
    { name: "Stairs", namePt: "Escada" },
    { name: "Horse", namePt: "Cavalo" },
    { name: "Clay", namePt: "Argila" },
    { name: "Limb", namePt: "Membro" },
    { name: "Lung", namePt: "Pulmão" },
    { name: "Problem", namePt: "Problema" },
    { name: "Keyboard", namePt: "Teclado" },
    { name: "Zoo", namePt: "Zoológico" },
    { name: "Bee", namePt: "Abelha" },
    { name: "Seat", namePt: "Assento" },
    { name: "Porch", namePt: "Varanda" },
    { name: "Joint", namePt: "Junta" },
    { name: "Clear", namePt: "Claro" },
    { name: "Winter", namePt: "Inverno" },
    { name: "Last", namePt: "Último" },
    { name: "Lost", namePt: "Perdido" },
    { name: "Owl", namePt: "Coruja" },
    { name: "Oak", namePt: "Carvalho" },
    { name: "Cream", namePt: "Creme" },
    { name: "Sour", namePt: "Azedo" },
    { name: "Creation", namePt: "Criação" },
    { name: "Salary", namePt: "Salário" },
    { name: "Punch", namePt: "Soco" },
    { name: "Risk", namePt: "Risco" },
    { name: "Cross", namePt: "Cruzamento,Cruz " },
    { name: "Section", namePt: "Seção" },
    { name: "Fragile", namePt: "Frágil" },
    { name: "Angel", namePt: "Anjo" },
    { name: "Bread", namePt: "Pão" },
    { name: "Chain", namePt: "Corrente" },
    { name: "Chairs", namePt: "Cadeira" },
    { name: "Eye", namePt: "Olho" },
    { name: "Flip flops", namePt: "Chinelo" },
    { name: "Helicopter", namePt: "Helicóptero" },
    { name: "Sea", namePt: "Mar" },
    { name: "Sign", namePt: "Sinal" },
    { name: "Towels", namePt: "Toalhas" },
    { name: "Candies", namePt: "Doces" },
    { name: "Eyeglasses", namePt: "Óculos" },
    { name: "Eraser", namePt: "Borracha" },
    { name: "Bridge", namePt: "Ponte" },
    { name: "Starfish", namePt: "Estrela do Mar" },
    { name: "Butter", namePt: "Margarina" },
    { name: "Oil", namePt: "Óleo" },
    { name: "Glass", namePt: "Vidro" },
    { name: "Wine", namePt: "Vinho" },
    { name: "Grass", namePt: "Grama" },
    { name: "Bush", namePt: "Arbusto" },
    { name: "Ant", namePt: "Formiga" },
    { name: "Baloon", namePt: "Balão" },
    { name: "Bear", namePt: "Urso" },
    { name: 'Motorcycle', namePt: "Moto" },
    { name: 'Wall', namePt: "Parede" },      
    { name: 'Bubbles', namePt: "Bolhas" },
    { name: 'Desert', namePt: "Deserto" },
    { name: 'Eggs', namePt: "Ovos" },     
]
