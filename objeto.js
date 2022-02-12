const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 2,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  function customerInfo (order) {
   const entregador = order.order.delivery.deliveryPerson;
   const comprador = order.name;
   const telefone = order.phoneNumber;
   const rua = order.address.street;
   const numeroRua = order.address.number;
   const apartamento = order.address.apartment;
    console.log(`Olá ${entregador}, entrega para: ${comprador}, telefone ${telefone}, endereço: ${rua}, nº ${numeroRua}, apartamento ${apartamento}.`);
  
  }
  
  customerInfo(order);

  console.log(order.order.pizza.marguerita.amount)

  const orderModifier = (order) => {
   const outroNome = order.name = 'Luiz Silva';

   const pizza = order.pizza;
   const precoMarguerita = order.order.pizza.marguerita.price;
   const precoPepperoni = order.order.pizza.pepperoni.price;
   const quantMarguerita = order.order.pizza.marguerita.amount;
   const quantPepperoni = order.order.pizza.pepperoni.amount;

   const precocoke = order.order.drinks.coke.price;
   const quantcoke = order.order.drinks.coke.amount;

   const precoEntrega = order.order.delivery.price;

   const valorDaCompra = (precoMarguerita *quantMarguerita) + (precoPepperoni * quantPepperoni) + (precocoke * quantcoke) + precoEntrega;

   console.log(`Olá, ${outroNome}. Você comprou: ${quantMarguerita} pizza de  Marguerita, ${quantPepperoni} pizza de Pepperoni, ${quantcoke} coke e o valor da entrega para a sua casa fica de ${precoEntrega}. O valor total da compra é ${valorDaCompra}`)
  
  }
  
  orderModifier(order);