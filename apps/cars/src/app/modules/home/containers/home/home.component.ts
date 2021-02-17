import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars = [
    {
      id: 1,
      make: 'Audi',
      model: 'A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        address: 'Osdorfer Str 113, Berlin',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 2,
      make: 'Audi',
      model: 'A3 Sportback',
      description:
        '\n' +
        'Особености и Екстри\n' +
        'Комфорт: Климатик, Климатроник, Кожен салон, Ел.стъкла, Ел.огледала, Подгряване на седалки, Алуминиеви джанти, DVD/TV, Мултифункционален волан\n' +
        'Сигурност: ABS, ESP, Airbag, Ксенонови фарове, Халогенни фарове, ASR/Тракшън контрол, Аларма, Центр. заключване, Застраховка, Безключово палене\n' +
        'Друго: Автопилот, Сервизна книжка, Навигационна система\n',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        address: 'Osdorfer Str 113, Berlin',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 3,
      make: 'Audi',
      model: 'Q3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        address: 'bul. San Stefano 29, Bulgaria',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 4,
      make: 'Audi',
      model: 'Q5 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 5,
      make: 'Audi',
      model: 'A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 6,
      make: 'Audi',
      model: 'Q7',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'Cabriolet',
          status: true,
        },
        {
          name: '4x4',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 7,
      make: 'Audi',
      model: 'A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://www.check24.de/kfz-versicherung/img/automarken/audi/audi-q5-2018.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 8,
      make: 'Audi',
      model: 'A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 9,
      make: 'Audi',
      model: 'RS 7 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
    {
      id: 10,
      make: 'Audi',
      model: 'RS 3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      extras: [
        {
          name: 'Alarm',
          status: true,
        },
        {
          name: 'Leather Seats',
          status: false,
        },
        {
          name: 'CD Player',
          status: true,
        },
        {
          name: 'Bluetooth',
          status: false,
        },
      ],
      price: '4 899 $',
      image: [
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      ],
      createdOn: Date.now(),
      owner: {
        name: 'Ivan Ivanov',
        phone: '+359877711021',
        email: 'ivan.ivanov@gmail.com',
      },
    },
  ];

  listCars = [];

  lastId = 4;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.lastId; i++) {
      this.listCars.push(this.cars[i]);
    }
  }

  onScroll() {
    for (let i = this.lastId; i < this.lastId + 4; i++) {
      if (this.listCars.length < this.cars.length) {
        this.listCars.push(this.cars[i]);
      }
    }
    this.lastId = this.lastId + 4;
  }
}
