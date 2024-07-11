const products = [
    { id: 1, name: "Haier Refrigerator HRF-216 EPC/EPB/EP", attributes: { price: "Rs 109,999", color: "Black", }},
    { id: 2, name: "Haier Refrigerator HRF-186", attributes: { price: "Rs 89,999", color: "Dark Gray"} },
    { id: 3, name: "Haier Refrigerator HRF-202", attributes: { price: "Rs 12,899", color: "Gray"} },
    { id: 4, name: "Dawlance Refrigerator 9160 WB", attributes: { price: "Rs 79,999", color: "Blue"} },
    { id: 5, name: "Dawlance Refrigerator 9149 WB", attributes: { price: "Rs 89,999", color: "Red"} },
    { id: 6, name: "Dawlance Refrigerator 9140 WB", attributes: { price: "Rs 10,999", color: "Light Black"} },
    { id: 7, name: "Hero Refrigerator Cool Single Door", attributes: { price: "Rs 49,999", color: "Gray"} },
    { id: 8, name: "Hero Refrigerator Frost Double Door 2", attributes: { price: "Rs 19,299", color: "Black & White"} },
    { id: 9, name: "Hero Frost Side by Side Refrigerator", attributes: { price: "Rs 29,399", color: "Dark Gray"} },
    { id: 10, name: "Haier HWM 150-826 Fully Automatic", attributes: { price: "Rs 34,999", color: "Brown"} },
    { id: 11, name: "Haier HWM 150 1708 Fully Automatic", attributes: { price: "Rs 29,999", color: "Pink"} },
    { id: 12, name: "Haier HWM 85 1826 Fully Automatic", attributes: { price: "Rs 22,899", color: "Cyan"} },
    { id: 13, name: "Dawlance DW-6100W Top Load", attributes: { price: "Rs 39,999", color: "Gray"} },
    { id: 14, name: "Dawlance Refrigerator 9140 WB", attributes: { price: "Rs 10,999", color: "Blue" } },
    { id: 15, name: "PEL Classic Microwave", attributes: { price: "Rs 19,999", color: "White"} },
    { id: 16, name: "PEL Convection Microwave Oven", attributes: { price: "Rs 32,999", color: "Brown"} },
    { id: 17, name: "PEL Desire Microwave Oven", attributes: { price: "Rs 19,900", color: "Black"} },
    { id: 18, name: "TCL 32L5A 32 Inch Smart Android", attributes: { price: "Rs 119,999", color: "Black"} },
    { id: 19, name: "TCL 32D310 Series 32 Inch", attributes: { price: "Rs 132,999", color: "Black"} },
    { id: 20, name: "TCL 55 Inch 55P635 4K UHD", attributes: { price: "Rs 129,900", color: "White"} },
    { id: 21, name: "Lenovo IdeaPad 1 15AMN7", attributes: { price: "Rs 134,999", color: "Black"} },
    { id: 22, name: "Dell Vostro 3520 Laptop", attributes: { price: "Rs 219,999", color: "Light Gray"} },
    { id: 23, name: "HP Laptop 15-FD0336NIA", attributes: { price: "Rs 122,899", color: "Black"} },
    { id: 24, name: "Decakila KEJB001W Stand Blender", attributes: { price: "Rs 9,999", color: "White"} },
    { id: 25, name: "Gaba National GN-2817/18 2 in 1 Blender & Grinder", attributes: { price: "Rs 5,999", color: "White"} },
    { id: 26, name: "Decakila KEJB002W Stand Blender", attributes: { price: "Rs 8,900", color: "Black"} },
    { id: 27, name: "Haier HSU-18HFCF 1.5", attributes: { price: "Rs 190,999", color: "Light Gray"} },
    { id: 28, name: "Haier HSU 18HFTCD T3 1.5", attributes: { price: "Rs 150,999", color: "Gray"} },
    { id: 29, name: "Haier HSU 12HFCS W Heat", attributes: { price: "Rs 180,900", color: "White"} },
    { id: 30, name: "Philips HV Steam Iron Light Blue", attributes: { price: "Rs 19,999", color: "Light Blur"}}

    // Add more products as needed
];

function populateProductSelectors() {
    const productSelectors = document.querySelectorAll('.product-selector select');
    productSelectors.forEach(selector => {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            selector.appendChild(option);
        });
    });
}

function compareProducts() {
    const productId1 = parseInt(document.getElementById('product1').value);
    const productId2 = parseInt(document.getElementById('product2').value);
    

    if (productId1 !== -1 && productId2 !== -1 && productId1 !== productId2) {
        const selectedProduct1 = products.find(product => product.id === productId1);
        const selectedProduct2 = products.find(product => product.id === productId2);

        const comparisonResult = document.getElementById('comparison-result');
        comparisonResult.innerHTML = "";

        const comparisonTable = document.createElement('table');
        comparisonTable.classList.add('comparison-table');

        for (const attribute in selectedProduct1.attributes) {
            const row = comparisonTable.insertRow();
            let cell = row.insertCell();
            cell.textContent = attribute;
            cell = row.insertCell();
            cell.textContent = selectedProduct1.attributes[attribute];
            cell = row.insertCell();
            cell.textContent = selectedProduct2.attributes[attribute];
        }

        comparisonResult.appendChild(comparisonTable);
    } else {
        const comparisonResult = document.getElementById('comparison-result');
        comparisonResult.innerHTML = "<p>Please select two different products to compare.</p>";
    }
}

document.addEventListener('DOMContentLoaded', populateProductSelectors);


