(() => {

const app = {
  init : function() {
    document.body.innerHTML += '<div id="overig"></div>'
    document.getElementById('overig').addEventListener('click', function(){
      document.getElementById('overig').innerHTML = ""
    })
    document.querySelectorAll('.product button[type=submit]').forEach((button) => {
      button.classList.add('none')
    })
    document.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', (el) => {
        el.preventDefault()
      })
    })
    document.querySelector('body header a').setAttribute('href', '#')
    document.querySelector('body header a').addEventListener('click', (el) => {
      el.preventDefault()
      app.vulWinkelwagen()
    })
    document.querySelectorAll('input[type=number]').forEach((input) => {
      input.addEventListener('change', app.changeCartValues)
    })
    this.startAnimation()
    animating.init()
  },
  startAnimation() {
    document.querySelectorAll('.product').forEach((prod, index) => {
      prod.classList.add('invisible')
      setTimeout(() => {
        prod.classList.remove('invisible')
      }, index * 400)
    })
  },
  itemsInCart : {
    amount : 0,
    totalCost : 0
  },
  changeCartValues() {
    app.itemsInCart = 0
    document.querySelectorAll('input[type=number]').forEach((input) => {
      app.itemsInCart += parseInt(input.value)
      document.querySelector('body > header section > p').innerHTML = `Winkelwagen = ${app.itemsInCart}`
    })
    console.log(this);
  },
  producten : [],
  vulWinkelwagen() {
    app['producten'] = []
    document.querySelectorAll('.product').forEach((product) => {
      if (product.childNodes[5].childNodes[1].childNodes[3].value >= 1) {
        var naam = product.childNodes[1].childNodes[1].innerHTML
        var aantal = product.childNodes[5].childNodes[1].childNodes[3].value
        var prijs = product.childNodes[3].childNodes[1].innerHTML
        var foto = product.childNodes[3].childNodes[3].src;
        var geheel = {naam, aantal, prijs, foto}
        app['producten'].push(geheel)
      }
    })
    app.toonWinkelwagen()
    // document.querySelector('#winkelwagenPopup')
  },
  toonWinkelwagen(){
    document.getElementById('overig').innerHTML = `<section id="winkelwagenPopup"></section>`
    document.getElementById('overig').innerHTML += `<div id="overlay"></div>`
    document.getElementById('winkelwagenPopup').innerHTML = ""
    console.log(app['itemsInCart']);
    var totaleKosten = 0
    app['producten'].forEach((product) => {
      prijsInNum = product.prijs.split('€ ')
      totaleKosten += parseInt(prijsInNum[1]) * product.aantal
      console.log(totaleKosten);
      document.getElementById('winkelwagenPopup').innerHTML += `
      <ul>
        <li>
          <button type="submit" name="button">x</button>
            <img src="${product.foto}" alt="${product.naam}">
            <p>${product.naam}</p>
            <p>aantal = ${product.aantal}</p>
            <p>${product.prijs}</p>
        </li>
      </ul>
      `
    })
    app.voegTotaalToe(totaleKosten)
  },
  voegTotaalToe : function (totaleKosten) {
    document.querySelector('#winkelwagenPopup').innerHTML += `
      <ul>
        <li>
          <p>Aantal producten = ${app['itemsInCart']}</p>
          <p>Totaal = &euro; ${totaleKosten}</p>
        </li>
      </ul>
      <p id='afrekenen'>Afrekenen</p>
    `
  }
}


const animating = {
  init: function() {
    document.querySelectorAll('input[type=number]').forEach((el) => {
      el.addEventListener('change', this.config)
    })
  },
  config(el) {
    let wichValues = animating[this.name]
    let picStartPos = document.querySelectorAll(`main input[name=${this.name}]`)[0].parentElement.parentElement.parentElement.childNodes[3].getBoundingClientRect();
    console.log(this.name);
    console.log(document.querySelectorAll(`main input[name=${this.name}]`)[0].parentElement.parentElement.parentElement.childNodes[3].getBoundingClientRect());
    wichValues.nextValue = parseInt(this.value)
    animating.toCart(this, picStartPos)
  },
    tostiIJzer : {
      currentValue : 0,
      nextValue : 0
    },
    ham : {
      currentValue : 0,
      nextValue : 0
    },
    kaas : {
      currentValue : 0,
      nextValue : 0
    },
    brood : {
      currentValue : 0,
      nextValue : 0
    },
  toCart: function(el, picStartPos) {
    if (animating[el.name].nextValue != animating[el.name].currentValue) {
      console.log("van " +animating[el.name].currentValue + " naar " + animating[el.name].nextValue);
      if (animating[el.name].nextValue > animating[el.name].currentValue) {
        for (var i = animating[el.name].currentValue; i < animating[el.name].nextValue; i++) {
          animating[el.name].currentValue = i + 1
          setTimeout(() => {
            let imgSrc = document.getElementById(el.name).parentElement.parentElement.parentElement.childNodes[3].childNodes[3].src
            document.getElementById('spamBox').innerHTML += `<img class="animateThis" src="${imgSrc}" style="position: fixed; transition: all 0.5s ease-in; right: ${picStartPos.right}px; top: ${picStartPos.top}px; width: 10rem;">`
            document.querySelectorAll('.animateThis').forEach((img) => {
              setTimeout(() => {
                img.classList.add('animateToCart')
              }, 100)
            })
          }, i * 200)
        }
      } else if (animating[el.name].nextValue > animating[el.name].currentValue) {
        console.log('wajajajajoooooo');
      }
    }
  }
}

app.init()

})();
