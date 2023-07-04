const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#ShoppingCartContainer')

const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toogleAsideCartMenu)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive')
    if (isAsideOpen){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive')
    if(isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside()
}
function toogleAsideCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')

    }
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Ipad',
    price: 250,
    image: "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})
productList.push({
    name: 'Imac',
    price: 250,
    image: 'https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Ipad',
    price: 250,
    image: "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})
productList.push({
    name: 'Imac',
    price: 250,
    image: 'https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Ipad',
    price: 250,
    image: "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})
productList.push({
    name: 'Imac',
    price: 250,
    image: 'https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
        productImage.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText= '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
    
        const productInfoFigure = document.createElement('figure')
        const productCartIcon = document.createElement('img')
        productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productCartIcon)
    
        productInfoDiv.append(productPrice, productName)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImage, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
