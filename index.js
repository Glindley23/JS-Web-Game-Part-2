function newImage(url, left, bottom){
    let object = document.createElement('img');
    object.src = url;
    object.style.position = 'fixed';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
    return object;
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom);
    item.addEventListener('dblclick', function () {
        item.remove();
        let inventoryItem = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
    });
};

for (let i = 0; i < window.innerWidth; i+= 100) {
    newImage('assets/grass.png', i, 100);
    newImage('assets/grass.png', i, 200);
    newImage('assets/grass.png', i, 300);
    newImage('assets/grass.png', i, 400);
    newImage('assets/grass.png', i, 500);
    newImage('assets/grass.png', i, 550);
}

for (let i = 0; i < window.innerWidth; i+= 100) {
    newImage('assets/sky.png', i, 650);
    newImage('assets/sky.png', i, 750);
    newImage('assets/sky.png', i, 850);
}
let inventory = document.createElement('div');

function newInventory(){
    
    inventory.style.position = 'fixed';
    inventory.style.bottom = '0px';
    inventory.style.left = '0px';
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);
};

newInventory();
newImage('assets/green-character.gif', 100, 250);
newImage('assets/tree.png', 200, 450);
newImage('assets/pillar.png', 350, 250);
newImage('assets/pine-tree.png', 450, 350);
newImage('assets/crate.png', 150, 350);
newImage('assets/well.png', 500, 575);

newItem('assets/sword.png', 500, 555);
newItem('assets/shield.png', 165, 335);
newItem('assets/staff.png', 600, 250);